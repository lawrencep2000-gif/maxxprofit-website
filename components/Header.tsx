import Link from "next/link";

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="mark">M</span>
          <span>Maxx<span className="grad">Profit</span></span>
        </Link>
        <nav className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/support">Support</Link>
          <Link className="btn" href="#download">Get the app</Link>
        </nav>
      </div>
    </header>
  );
}
