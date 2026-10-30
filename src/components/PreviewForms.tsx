"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./Icons";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <form className="newsletter-form" onSubmit={handleSubmit}><label htmlFor="newsletter-email">Adresa juaj e emailit</label><div className="newsletter-line"><input id="newsletter-email" type="email" name="email" placeholder="emri@shembull.com" required disabled={submitted}/><button type="submit" disabled={submitted} aria-label="Regjistrohu për buletinin"><ArrowIcon size={24}/></button></div><p role="status">{submitted ? "Pamje prove: emaili u verifikua në formular, por nuk u ruajt. Lidhja me buletinin vjen para publikimit." : "Pamje prove — regjistrimi aktivizohet pasi të lidhet shërbimi i buletinit."}</p></form>;
}

export function SubmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <form className="submission-form" onSubmit={handleSubmit}><div className="field-grid"><label>Emri dhe mbiemri<input required name="name" placeholder="Emri juaj"/></label><label>Email<input required type="email" name="email" placeholder="emri@shembull.com"/></label></div><div className="field-grid"><label>Lloji i shkrimit<select required name="type" defaultValue=""><option value="" disabled>Zgjidhni një lloj</option><option>Ese</option><option>Poezi</option><option>Tregim</option><option>Kritikë letrare</option><option>Intervistë</option></select></label><label>Titulli i shkrimit<input required name="title" placeholder="Titulli"/></label></div><label>Shënim për redaksinë<textarea name="note" rows={5} placeholder="Na tregoni pak për shkrimin tuaj..."/></label><label>Link te dorëshkrimi <span className="optional">(i detyrueshëm në prototip)</span><input required type="url" name="manuscript" placeholder="https://..."/></label><label className="check-label"><input type="checkbox" required/><span>Konfirmoj se kam të drejtën të dërgoj këtë shkrim dhe pranoj që redaksia ta shqyrtojë. Asgjë nuk publikohet automatikisht.</span></label><button className="button-dark" type="submit" disabled={submitted}>Shiko konfirmimin <ArrowIcon size={18}/></button><p className="form-note" role="status">{submitted ? "Formulari u plotësua në këtë prototip. Nuk është dërguar ose ruajtur dorëshkrim. Sistemi i dorëzimit lidhet para publikimit." : "Pamje prove: ky formular kontrollon fushat, por nuk dërgon të dhëna ende."}</p></form>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <form className="submission-form contact-form" onSubmit={handleSubmit}><label>Emri juaj<input required name="name" placeholder="Emri juaj"/></label><label>Email<input required type="email" name="email" placeholder="emri@shembull.com"/></label><label>Mesazhi<textarea required name="message" rows={6} placeholder="Si mund të lidhemi?"/></label><button className="button-dark" type="submit" disabled={submitted}>Shiko konfirmimin <ArrowIcon size={18}/></button><p className="form-note" role="status">{submitted ? "Mesazhi u plotësua në këtë prototip, por nuk u dërgua. Adresa dhe shërbimi i kontaktit lidhen para publikimit." : "Pamje prove: mesazhet nuk dërgohen ende. Për dorëshkrime, përdorni faqen “Dërgo shkrimin”."}</p></form>;
}
