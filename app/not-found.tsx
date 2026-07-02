import Link from "next/link";
export default function NotFound() {
  return <main className="container legal"><h1>Page not found</h1><p>This page does not exist.</p><Link className="btn" href="/">Return home</Link></main>
}
