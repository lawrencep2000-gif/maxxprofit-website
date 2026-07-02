import { BarChart3, Camera, CircleDollarSign, Package, Search, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Camera, title: "AI Image Search", text: "Take a photo of an item and MaxxProfit identifies it for resale analysis." },
  { icon: Search, title: "Live Market Analysis", text: "Use live marketplace data to understand current pricing and opportunity." },
  { icon: TrendingUp, title: "MaxxScore™", text: "A simple buy-or-pass score designed to help you source smarter." },
  { icon: CircleDollarSign, title: "Max Buy Price™", text: "Know the most you should pay before buying inventory." },
  { icon: Package, title: "Inventory Manager", text: "Track listed, sold, returned, and unsold items with photos and profit data." },
  { icon: BarChart3, title: "Business Analytics", text: "See profit, ROI, best flips, expenses, and business performance at a glance." }
];

export default function Home() {
  return (
    <main>
      <section className="container hero">
        <div>
          <div className="eyebrow">AI-powered reseller assistant</div>
          <h1>Buy smarter.<br /><span className="grad">Sell faster.</span><br />Grow your business.</h1>
          <p className="lede">MaxxProfit helps resellers identify items, analyze live market data, calculate profit potential, and track every flip from purchase to sale.</p>
          <div className="ctas" id="download">
            <Link className="btn" href="/support">Coming soon to the App Store</Link>
            <Link className="btn secondary" href="#features">See features</Link>
          </div>
          <div className="trust">
            <span>AI Image Search</span><span>Live eBay Analysis</span><span>Inventory</span><span>Analytics</span>
          </div>
        </div>
        <div className="phone-wrap">
          <div className="glow" />
          <div className="phone">
            <div className="screen">
              <div className="screen-top"><span>MaxxProfit</span><span>👑 Pro</span></div>
              <div className="small">Today&apos;s Profit</div>
              <div className="profit">+$184</div>
              <div className="card green" style={{ margin: "24px 0" }}>
                <div className="eyebrow" style={{ color: "white" }}>Recommended</div>
                <h3>AI Image Search</h3>
                <p style={{ color: "#dcfce7" }}>Snap an item and instantly get a smarter buying decision.</p>
              </div>
              <div className="grid stats">
                <div className="stat-card"><b>$2.4k</b><span className="small">Monthly</span></div>
                <div className="stat-card"><b>81%</b><span className="small">Avg ROI</span></div>
                <div className="stat-card"><b>43</b><span className="small">Sold</span></div>
              </div>
              <div className="card" style={{ marginTop: 22 }}>
                <h3>MaxxScore™ 92</h3>
                <p>Excellent deal confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container">
        <div className="section-head">
          <h2>Everything a reseller needs in one simple app.</h2>
          <p>From sourcing to selling, MaxxProfit gives you the workflow to make faster, more confident buying decisions.</p>
        </div>
        <div className="grid features">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="card feature" key={feature.title}>
                <div className="icon"><Icon size={24} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="container">
        <div className="section-head">
          <h2>From photo to profit decision.</h2>
          <p>MaxxProfit turns a messy sourcing process into a clear workflow.</p>
        </div>
        <div className="grid steps">
          {["Take a photo", "AI identifies", "Search market", "Get MaxxScore", "Track the flip"].map((step, index) => (
            <div className="step" key={step}>
              <div className="step-num">0{index + 1}</div>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <h2>Built for real flipping workflows.</h2>
          <p>Use MaxxProfit at thrift stores, garage sales, estate sales, Facebook Marketplace pickups, and anywhere you source inventory.</p>
        </div>
        <div className="grid screens">
          {["AI Search", "Market Analysis", "Inventory", "Tracker", "Analytics", "Dashboard"].map((name) => (
            <div className="mock" key={name}>
              <div className="mock-title">{name}</div>
              <div>
                <div className="mock-line greenline" />
                <div className="mock-line" />
                <div className="mock-line" style={{ width: "55%" }} />
              </div>
              <div className="small">MaxxProfit</div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="container">
        <div className="section-head">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq grid">
          <div className="card faq-item"><h3>Is MaxxProfit connected to my eBay account?</h3><p>No. MaxxProfit uses marketplace data for analysis and does not require you to sign in with an eBay account.</p></div>
          <div className="card faq-item"><h3>Are prices guaranteed?</h3><p>No. Pricing, MaxxScore, and Max Buy Price are estimates designed to support decision-making. Always verify listings before buying.</p></div>
          <div className="card faq-item"><h3>Does MaxxProfit store my photos?</h3><p>Photos are used for AI item identification and app features. See the Privacy Policy for more details.</p></div>
          <div className="card faq-item"><h3>When is the app launching?</h3><p>MaxxProfit is preparing for TestFlight and App Store release. Join updates through support channels soon.</p></div>
        </div>
      </section>
    </main>
  );
}
