import Link from "next/link";
import { ArrowIcon } from "./Icons";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><div><Link className="footer-logo" href="/">Njerëz<br/>prej Letre<span>.</span></Link><p>Një revistë e pavarur për letërsinë, idetë dhe njerëzit pas fjalëve.</p></div><div className="footer-index"><span>Shfleto</span><Link href="/rubrika/letersi">Letërsi</Link><Link href="/rubrika/zera-te-rinj">Zëra të rinj</Link><Link href="/rubrika/diaspora">Diaspora</Link><Link href="/rubrika/kritike">Kritikë letrare</Link><Link href="/rubrika/ide">Ide & reflektime</Link></div><div className="footer-index"><span>Revista</span><Link href="/rreth-nesh">Rreth nesh</Link><Link href="/dergo">Dërgo shkrimin</Link><Link href="/kerko">Kërko</Link><Link href="/kontakt">Kontakt <ArrowIcon size={15}/></Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Njerëz prej Letre — Marginalia</span><span>Prototip editorial · Përmbajtje ilustruese</span><span>Me mendje të hapur dhe laps në dorë.</span></div></footer>;
}
