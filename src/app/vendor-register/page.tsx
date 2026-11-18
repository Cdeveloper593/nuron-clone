"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/sites/nuron/chrome";

export default function Page() {
  const [done, setDone] = useState(false);
  return (
    <>
      <Breadcrumb title="Vendor Registration" crumbs={[{ label: "Home", href: "/" }, { label: "Vendor Registration" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div className="section-title"><span className="subtitle">Sell on Nuron</span><h3 className="title">Vendor Registration</h3><p>Register as a vendor to open your own store and list NFTs for sale or auction.</p></div>
        {done ? (<p style={{ color: "#3EB75E", fontWeight: 500 }}>Thanks — your vendor application was received (demo, stored locally only).</p>) : (
          <form className="rn-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <label htmlFor="v-name">Store Name</label><input id="v-name" required placeholder="Your store name" />
            <label htmlFor="v-email">Email Address</label><input id="v-email" type="email" required placeholder="you@example.com" />
            <label htmlFor="v-user">Username</label><input id="v-user" required placeholder="Choose a username" />
            <label htmlFor="v-about">About Your Store</label><textarea id="v-about" rows={4} placeholder="Tell collectors about your store" />
            <button type="submit" className="btn btn-primary">Register as Vendor</button>
          </form>)}
        </div>
      </div></section>
    </>
  );
}
