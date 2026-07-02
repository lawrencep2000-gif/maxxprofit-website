import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand"><span className="mark">M</span><span>Maxx<span className="grad">Profit</span></span></div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/ai-disclaimer">AI Disclaimer</Link>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>© 2026 MaxxProfit. All rights reserved.</div>
      </div>
    </footer>
  );
}
