import Link from "next/link";
export default function NotFound() { return <section className="not-found shell"><span className="small-label">404 / Faqja mungon</span><h1>Një faqe jashtë librit<span>.</span></h1><p>Kjo faqe nuk u gjet. Mund të ktheheni te fillimi ose të kërkoni në arkiv.</p><div><Link href="/">Kryefaqja ↗</Link><Link href="/kerko">Kërko shkrime ↗</Link></div></section>; }
