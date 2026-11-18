"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/sites/nuron/chrome";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Page() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Breadcrumb title="Contact" crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="two-col">
          <div><img className="rounded" src="/sites/nuron/wp-content/uploads/2023/03/contact1.png" alt="Contact Nuron" /></div>
          <div>
            <div className="section-title"><span className="subtitle">Quick Contact</span><h3 className="title">Contact Us</h3><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p></div>
            <div style={{ display: "grid", gap: 16 }}>
              <div className="info-card"><div className="icon"><Phone size={24} /></div><h4>Our Phone Numbers</h4><p>+444 555 666 777<br />+222 222 222 333</p></div>
              <div className="info-card"><div className="icon"><Mail size={24} /></div><h4>Our Email Address</h4><p>admin@gmail.com<br />example@gmail.com</p></div>
              <div className="info-card"><div className="icon"><MapPin size={24} /></div><h4>Our Location</h4><p>5678 Bangla Main Road, cities 580 GBnagla, example 54786</p></div>
            </div>
          </div>
        </div>
        <div className="rn-section-gapTop"><div className="section-title"><span className="subtitle">Send a message</span><h3 className="title">Leave A Message</h3></div>
          {sent ? (<p style={{ color: "#3EB75E", fontWeight: 500 }}>Thanks — your message has been sent (demo, stored locally only).</p>) : (
            <form className="rn-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div><label htmlFor="c-name">Your Name</label><input id="c-name" required placeholder="Your name" /></div>
                <div><label htmlFor="c-email">Your Email</label><input id="c-email" type="email" required placeholder="Your email" /></div>
              </div>
              <label htmlFor="c-subject">Subject</label><input id="c-subject" required placeholder="Subject" />
              <label htmlFor="c-message">Message</label><textarea id="c-message" rows={5} required placeholder="Your message" />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>)}
        </div>
        <div className="rn-section-gapTop"><div className="info-card"><h4>Find us on the map</h4><p>The original contact page embeds a Google Map for “5678 Bangla Main Road, cities 580 GBnagla, example 54786”. No map embed URL was present in the fetched source page, so no live map is embedded here — <a href="https://www.google.com/maps/search/?api=1&query=5678+Bangla+Main+Road" target="_blank" rel="noreferrer" style={{ color: "var(--color-primary)" }}>open the address in Google Maps</a>.</p></div></div>
      </div></section>
    </>
  );
}
