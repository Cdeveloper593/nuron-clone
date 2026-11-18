"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";

// Source: vendor membership shortcode — a 4-step flow (Plans, Registration,
// Confirmation, Thank You). Local demo of the same steps.
const STEPS = ["Plans", "Registration", "Confirmation", "Thank You"] as const;

export default function Page() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  return (
    <>
      <Breadcrumb title="Vendor Membership" crumbs={[{ label: "Home", href: "/" }, { label: "Vendor Membership" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Become a Vendor</span><h3 className="title">Vendor Membership</h3></div>
        <ol style={{ display: "flex", gap: 12, flexWrap: "wrap", listStyle: "none", padding: 0, marginBottom: 32 }}>
          {STEPS.map((s, i) => (
            <li key={s} style={{ padding: "8px 16px", borderRadius: 10, background: i === step ? "var(--color-primary)" : "var(--color-card)", color: i === step ? "#fff" : "inherit", fontWeight: i === step ? 600 : 400 }}>
              {i + 1}. {s}
            </li>
          ))}
        </ol>
        {done ? (
          <div className="info-card" style={{ padding: 32, textAlign: "center" }}>
            <h4>Thank You</h4>
            <p>Your vendor membership registration was received (demo). We will be in touch soon.</p>
            <p style={{ marginTop: 16 }}><Link href="/vendor-register" className="btn btn-primary-alta">Back to Vendor Registration</Link></p>
          </div>
        ) : step === 0 ? (
          <div className="info-card" style={{ padding: 32 }}>
            <h4>Choose a Plan</h4>
            <p>Pick the membership plan that fits how you want to sell on Nuron.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 20 }}>
              {["Basic — Free", "Standard — $29 / month", "Premium — $59 / month"].map((plan) => (
                <button key={plan} type="button" className="btn btn-primary-alta" onClick={() => setStep(1)}>{plan}</button>
              ))}
            </div>
          </div>
        ) : step === 1 ? (
          <form className="info-card" style={{ padding: 32, display: "grid", gap: 12, maxWidth: 520 }}
            onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <h4>Registration</h4>
            <input required placeholder="Store name" aria-label="Store name" />
            <input required type="email" placeholder="Email address" aria-label="Email address" />
            <input required placeholder="Username" aria-label="Username" />
            <button type="submit" className="btn btn-primary">Continue →</button>
          </form>
        ) : (
          <div className="info-card" style={{ padding: 32 }}>
            <h4>Confirmation</h4>
            <p>Review your details and confirm your vendor membership registration.</p>
            <button type="button" className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setDone(true)}>Confirm Registration</button>
          </div>
        )}
      </div></section>
    </>
  );
}
