import type { Metadata } from "next";
import SearchPageClient from "./search";
export const metadata: Metadata = { title: "Kërko" };
export default function SearchPage({ searchParams }: { searchParams?: { fjala?: string } }) { return <SearchPageClient initialQuery={searchParams?.fjala ?? ""}/>; }
