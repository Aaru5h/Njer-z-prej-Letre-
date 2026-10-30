"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon, SearchIcon } from "./Icons";

const nav = [
  ["Letërsi", "/rubrika/letersi"], ["Zëra të rinj", "/rubrika/zera-te-rinj"],
  ["Diaspora", "/rubrika/diaspora"], ["Kritikë", "/rubrika/kritike"],
  ["Ide & reflektime", "/rubrika/ide"], ["Libra", "/libra"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="Njerëz prej Letre — faqja kryesore" onClick={() => setOpen(false)}><span className="brand-name">Njerëz prej Letre<span className="brand-dot">.</span></span><span className="brand-sub">MARGINALIA</span></Link>
      <nav className="desktop-nav" aria-label="Rubrikat kryesore">{nav.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}</nav>
      <div className="header-actions"><Link href="/kerko" className="icon-button" aria-label="Kërko"><SearchIcon /></Link><Link href="/dergo" className="submit-link">Dërgo shkrimin <span aria-hidden="true">↗</span></Link><button className="mobile-menu-button icon-button" aria-label={open ? "Mbyll menunë" : "Hap menunë"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</button></div>
    </div>
    {open && <nav className="mobile-nav" aria-label="Menuja mobile">{nav.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/rreth-nesh" onClick={() => setOpen(false)}>Rreth nesh</Link><Link href="/dergo" onClick={() => setOpen(false)}>Dërgo shkrimin</Link></nav>}
  </header>;
}
