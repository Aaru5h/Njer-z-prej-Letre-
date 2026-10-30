import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/PreviewForms";
export const metadata: Metadata = { title: "Kontakt" };
export default function ContactPage() { return <><div className="prototype-banner">Kontakt prove · Mesazhet nuk dërgohen ende</div><section className="contact-hero shell"><span className="small-label">Na shkruani</span><h1>Biseda vazhdon<br/><em>edhe këtu.</em></h1><p>Për pyetje, bashkëpunime ose ide për revistën, përdorni formularin e kontaktit. Për të dërguar një vepër, kaloni te <Link href="/dergo">faqja e shkrimeve</Link>.</p></section><section className="contact-content shell"><div><span className="small-label">Një shënim nga redaksia</span><p>Na interesojnë bisedat e hapura me lexues, shkrimtarë, përkthyes dhe nisma kulturore. Adresa zyrtare e redaksisë dhe afati i përgjigjes vendosen para publikimit.</p></div><div><h2>Çfarë keni në mendje?</h2><ContactForm/></div></section></>; }
