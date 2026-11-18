import { Breadcrumb } from "@/components/sites/nuron/chrome";

// Source content (WP REST): Quick Contact blocks with the demo's real
// address, phone numbers, emails and location.
export default function Page() {
  return (
    <>
      <Breadcrumb title="Contact Info" crumbs={[{ label: "Home", href: "/" }, { label: "Contact Info" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div className="section-title"><span className="subtitle">Quick Contact</span><h3 className="title">Contact Info</h3></div>
        <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          <div className="info-card">
            <h4>Address</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          </div>
          <div className="info-card">
            <h4>Our Phone Numbers</h4>
            <p><a href="tel:+444555666777">+444 555 666 777</a></p>
            <p><a href="tel:+222222222333">+222 222 222 333</a></p>
          </div>
          <div className="info-card">
            <h4>Our Email Address</h4>
            <p><a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
            <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
          </div>
          <div className="info-card">
            <h4>Our Location</h4>
            <p>5678 Bangla Main Road, cities 580 GBnagla, example 54786</p>
          </div>
        </div>
      </div></section>
    </>
  );
}
