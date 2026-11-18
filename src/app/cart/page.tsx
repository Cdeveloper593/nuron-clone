"use client";

import Link from "next/link";
import { Breadcrumb, useCart } from "@/components/sites/nuron/chrome";
import { products } from "@/components/sites/nuron/data";
import { priceOf } from "@/components/sites/nuron/subpages-data";

export default function Page() {
  const { items, setQty, remove, clear } = useCart();
  const lines = items.map((i) => ({ ...i, product: products[i.slug] })).filter((l) => l.product);
  const subtotal = lines.reduce((n, l) => n + (parseInt(l.product.priceUSD, 10) / 100) * l.qty, 0);
  return (
    <>
      <Breadcrumb title="Cart" crumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        {lines.length === 0 ? (
          <div className="empty-state"><h3>Your cart is empty</h3><p>Browse the marketplace and add an NFT to get started.</p><p style={{ marginTop: 20 }}><Link href="/shop" className="btn btn-primary">Go to Shop</Link></p></div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>
            <div>
              <table className="shop-table"><thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th></th></tr></thead><tbody>
                {lines.map((l) => (
                  <tr key={l.slug}>
                    <td><Link href={`/product/${l.slug}`} style={{ display: "flex", alignItems: "center", gap: 12 }}><img src={l.product.img} alt={l.product.name} width={56} height={56} style={{ borderRadius: 8, objectFit: "cover" }} /><span style={{ color: "#fff" }}>{l.product.name}</span></Link></td>
                    <td>{priceOf(l.product)}</td>
                    <td><input className="qty-input" type="number" min={1} value={l.qty} onChange={(e) => setQty(l.slug, parseInt(e.target.value || "1", 10))} aria-label="Quantity" /></td>
                    <td>${((parseInt(l.product.priceUSD, 10) / 100) * l.qty).toFixed(2)}</td>
                    <td><button type="button" className="btn btn-primary-alta btn-small" onClick={() => remove(l.slug)}>Remove</button></td>
                  </tr>))}
              </tbody></table>
              <button type="button" className="btn btn-primary-alta btn-small" style={{ marginTop: 16 }} onClick={clear}>Clear Cart</button>
            </div>
            <div className="cart-totals"><h4>Cart Totals</h4>
              <div className="row-line"><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></div>
              <div className="row-line"><span>Shipping</span><b>Free</b></div>
              <div className="row-line"><span>Total</span><b>${subtotal.toFixed(2)}</b></div>
              <Link href="/checkout" className="btn btn-primary" style={{ width: "100%", marginTop: 16 }}>Proceed to Checkout</Link>
            </div>
          </div>)}
      </div></section>
    </>
  );
}
