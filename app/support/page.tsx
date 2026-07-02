import Link from "next/link";
export default function SupportPage() {
  return <main className="container legal">
    <h1>Support</h1>
    <p>Need help with MaxxProfit? We’re here to help.</p>
    <h2>Contact</h2>
    <p>Email: support@maxxprofit.app</p>
    <h2>Helpful Links</h2>
    <ul>
      <li><Link href="/privacy">Privacy Policy</Link></li>
      <li><Link href="/terms">Terms of Service</Link></li>
      <li><Link href="/ai-disclaimer">AI Disclaimer</Link></li>
    </ul>
    <h2>Common Questions</h2>
    <p>If AI search or eBay market analysis is not loading, make sure you have a stable internet connection and try again.</p>
  </main>
}
