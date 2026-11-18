import Link from "next/link";
import { Breadcrumb } from "@/components/sites/nuron/chrome";

// Source: Dokan/WCFM vendor dashboard ("Store Manager"). The live demo
// requires a vendor login; this is a local demo of the dashboard shell with
// the source's real menu, greeting and stats copy.
const MENU = [
  "Dashboard", "My Store", "Home", "Media", "Articles", "Add New Products",
  "Add New Orders", "Coupons", "Add New Store Vendors", "Add New Customers",
  "Add New Refund", "Settings", "Withdrawal", "Reviews", "Reports", "Logout",
];

export default function Page() {
  return (
    <>
      <Breadcrumb title="Store Manager" crumbs={[{ label: "Home", href: "/" }, { label: "Store Manager" }]} />
      <section className="rn-section-gap"><div className="nuron-container">
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, alignItems: "start" }}>
          <aside className="info-card" style={{ padding: 16 }}>
            <h4 style={{ marginBottom: 12 }}>My Store</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 4 }}>
              {MENU.map((m) => (
                <li key={m}><Link href="/store-manager" className="title-link" style={{ display: "block", padding: "6px 8px" }}>{m}</Link></li>
              ))}
            </ul>
          </aside>
          <div style={{ display: "grid", gap: 24 }}>
            <div className="info-card" style={{ padding: 24 }}>
              <h3 className="title" style={{ fontSize: 28 }}>Welcome to the Nuron Dashboard</h3>
              <p>$ 0.00 commission in last 7 days · 0 items sold in last 7 days</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
              {[
                ["Sales", "$ 0.00"],
                ["Orders", "0"],
                ["Products", "0"],
                ["Commission", "$ 0.00"],
              ].map(([label, value]) => (
                <div key={label} className="info-card" style={{ padding: 20, textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>{value}</div>
                  <div style={{ color: "var(--color-body)" }}>{label}</div>
                </div>
              ))}
            </div>
            <div className="info-card" style={{ padding: 24 }}>
              <h4>Store Stats</h4>
              <p>Store Analytics — no sales data yet for this demo store.</p>
              <h4 style={{ marginTop: 20 }}>Notifications</h4>
              <p>There is no notification yet!!</p>
            </div>
          </div>
        </div>
      </div></section>
    </>
  );
}
