import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleRow from "@/components/ArticleRow";
import { articles, sections } from "@/lib/content";

export function generateStaticParams() { return sections.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const section = sections.find((item) => item.slug === params.slug); return { title: section?.name ?? "Rubrikë", description: section?.description }; }
export default function SectionPage({ params }: { params: { slug: string } }) { const section = sections.find((item) => item.slug === params.slug); if (!section) notFound(); const entries = articles.filter((item) => item.categorySlug === section.slug); return <><div className="prototype-banner">Përmbajtje ilustruese për prototipin</div><section className="archive-hero shell"><span className="small-label">Rubrikë / Marginalia</span><h1>{section.name}<span>.</span></h1><p>{section.description}</p></section><section className="archive-list shell"><div className="section-topline"><span>{entries.length} {entries.length === 1 ? "shkrim" : "shkrime"}</span><span>Nga arkivi ynë ilustrues</span></div><div className="article-list">{entries.map((article, index) => <ArticleRow key={article.slug} article={article} index={index}/>)}</div></section></>; }
