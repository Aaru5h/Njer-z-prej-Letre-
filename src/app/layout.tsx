import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Njerëz prej Letre — Marginalia", template: "%s | Njerëz prej Letre" },
  description: "Një revistë e pavarur për letërsinë, idetë dhe njerëzit pas fjalëve. Prototip editorial me përmbajtje ilustruese.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="sq"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
