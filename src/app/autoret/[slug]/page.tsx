import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleRow from "@/components/ArticleRow";
import { articles, authors } from "@/lib/content";

export function generateStaticParams() { return authors.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const author = authors.find((item) => item.slug === params.slug); return { title: author?.name ?? "Autor" }; }
export default function AuthorPage({ params }: { params: { slug: string } }) { const author = authors.find((item) => item.slug === params.slug); if (!author) notFound(); const entries = articles.filter((item) => item.authorSlug === author.slug); return <><div className="prototype-banner">Profil ilustrues për prototipin</div><section className="author-hero shell"><div className="author-monogram portrait">{author.name.slice(0,1)}</div><div><span className="small-label">Autor / Marginalia</span><h1>{author.name}<span>.</span></h1><p className="author-place">{author.place}</p><p>{author.bio}</p></div></section><section className="archive-list shell"><div className="section-topline"><span>Shkrimet e autorit</span><span>{entries.length} shkrime ilustruese</span></div><div className="article-list">{entries.map((article, index) => <ArticleRow key={article.slug} article={article} index={index}/>)}</div></section></>; }
