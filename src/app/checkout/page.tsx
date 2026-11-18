"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb, useCart } from "@/components/sites/nuron/chrome";
import { products } from "@/components/sites/nuron/data";
import { priceOf } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  const { items, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const lines = items.map((i) => ({ ...i, product: products[i.slug] })).filter((l) => l.product);
  const subtotal = lines.reduce((n, l) => n + (parseInt(l.product.priceUSD, 10) / 100) * l.qty, 0);
  return (
    <>
      <Breadcrumb title="Checkout" crumbs={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        {placed ? (
          <div className="empty-state"><h3>Order placed — thank you! (Demo)</h3><p>No payment was taken and no order was sent anywhere. This is a local demo checkout.</p><p style={{ marginTop: 20 }}><Link href="/shop" className="btn btn-primary">Continue Shopping</Link></p></div>
        ) : lines.length === 0 ? (
          <div className="empty-state"><h3>Nothing to check out</h3><p>Your cart is empty.</p><p style={{ marginTop: 20 }}><Link href="/shop" className="btn btn-primary">Go to Shop</Link></p></div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 32, alignItems: "start" }}>
            <form className="rn-form" onSubmit={(e) => { e.preventDefault(); clear(); setPlaced(true); }}>
              <h3 style={{ marginBottom: 20 }}>Billing Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div><label htmlFor="co-first">First Name</label><input id="co-first" required /></div>
                <div><label htmlFor="co-last">Last Name</label><input id="co-last" required /></div>
              </div>
              <label htmlFor="co-email">Email Address</label><input id="co-email" type="email" required />
              <label htmlFor="co-address">Street Address</label><input id="co-address" required placeholder="House number and street name" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div><label htmlFor="co-city">Town / City</label><input id="co-city" required /></div>
                <div><label htmlFor="co-zip">Postcode / ZIP</label><input id="co-zip" required /></div>
              </div>
              <label htmlFor="co-notes">Order Notes (optional)</label><textarea id="co-notes" rows={3} placeholder="Notes about your order" />
              <p style={{ fontSize: 14 }}>Payment: demo only — no real payment is processed.</p>
              <button type="submit" className="btn btn-primary">Place Order</button>
            </form>
            <div className="cart-totals"><h4>Your Order</h4>
              {lines.map((l) => (<div key={l.slug} className="row-line"><span>{l.product.name} × {l.qty}</span><b>${((parseInt(l.product.priceUSD, 10) / 100) * l.qty).toFixed(2)}</b></div>))}
              <div className="row-line"><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></div>
              <div className="row-line"><span>Shipping</span><b>Free</b></div>
              <div className="row-line"><span>Total</span><b>${subtotal.toFixed(2)}</b></div>
            </div>
          </div>)}
      </div></section>
    </>
  );
}
