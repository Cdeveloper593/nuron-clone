"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/sites/nuron/chrome";

export default function Page() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [msg, setMsg] = useState("");
  return (
    <>
      <Breadcrumb title="My Account" crumbs={[{ label: "Home", href: "/" }, { label: "My Account" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div className="filter-tabs" style={{ marginBottom: 24 }}>
            <button type="button" className={tab === "login" ? "active" : ""} onClick={() => { setTab("login"); setMsg(""); }}>Login</button>
            <button type="button" className={tab === "register" ? "active" : ""} onClick={() => { setTab("register"); setMsg(""); }}>Register</button>
          </div>
          {msg && (<p style={{ color: "#3EB75E", fontWeight: 500 }}>{msg}</p>)}
          {tab === "login" ? (
            <form className="rn-form" onSubmit={(e) => { e.preventDefault(); setMsg("Logged in (demo — no real account or backend)."); }}>
              <h3 style={{ marginBottom: 20 }}>Login</h3>
              <label htmlFor="acc-user">Username or Email Address</label><input id="acc-user" required />
              <label htmlFor="acc-pass">Password</label><input id="acc-pass" type="password" required />
              <button type="submit" className="btn btn-primary">Log In</button>
            </form>) : (
            <form className="rn-form" onSubmit={(e) => { e.preventDefault(); setMsg("Account registered (demo — no real account or backend)."); }}>
              <h3 style={{ marginBottom: 20 }}>Register</h3>
              <label htmlFor="reg-user">Username</label><input id="reg-user" required />
              <label htmlFor="reg-email">Email Address</label><input id="reg-email" type="email" required />
              <label htmlFor="reg-pass">Password</label><input id="reg-pass" type="password" required />
              <button type="submit" className="btn btn-primary">Register</button>
            </form>)}
          <p style={{ fontSize: 14, marginTop: 16 }}>Demo only — no accounts are created and nothing is sent to a server.</p>
        </div>
      </div></section>
    </>
  );
}
