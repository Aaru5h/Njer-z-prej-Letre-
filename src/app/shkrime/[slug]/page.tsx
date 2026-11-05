import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, authors, getArticle } from "@/lib/content";
import ArticleRow from "@/components/ArticleRow";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  return { title: article?.title ?? "Shkrim", description: article?.dek };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const author = authors.find((item) => item.slug === article.authorSlug);
  const related = article.illustrative === false
    ? []
    : articles.filter((item) => item.slug !== article.slug && item.illustrative !== false).slice(0, 2);

  return <>
    {article.illustrative !== false && <div className="prototype-banner">Shkrim ilustrues për prototipin · Nuk është botim i një autori real</div>}
    <article className="article-page shell">
      <div className="article-breadcrumb"><Link href="/">Kryefaqja</Link><span>/</span><Link href={`/rubrika/${article.categorySlug}`}>{article.category}</Link></div>
      <header className="article-header">
        <div className="article-header-meta"><span>{article.category}</span><span>{article.read}</span></div>
        <h1>{article.title}</h1>
        <p>{article.dek}</p>
        <div className="article-byline"><div className="author-monogram">{article.author.slice(0, 1)}</div><div><span>Shkruar nga <Link href={`/autoret/${article.authorSlug}`}>{article.author}</Link></span><small>{article.date}</small></div><span className="article-edition">MARGINALIA / {article.number}</span></div>
      </header>
      <div className="article-body-wrap">
        <aside className="article-aside"><span>Njerëz prej Letre</span><span>Lexim i ngadaltë<br/>Mendim i lirë</span></aside>
        <div className="article-body">
          {article.paragraphs.map((paragraph, index) => <div key={index}>
            {index === article.headingParagraphIndex
              ? <h2 className="article-body-heading">{paragraph}</h2>
              : <p className={index === 0 ? "dropcap" : undefined}>{paragraph}</p>}
            {index === 1 && article.quote && <blockquote>{article.quote}</blockquote>}
          </div>)}
          <div className="article-endmark">❧</div>
          {article.sourceUrl && <p className="article-original">Botuar fillimisht në <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">Substack ↗</a></p>}
          <div className="article-tags"><span>Temat</span>{article.tags.map((tag) => <Link key={tag} href={`/kerko?fjala=${encodeURIComponent(tag)}`}>{tag}</Link>)}</div>
        </div>
      </div>
      <div className="article-author-card"><div className="author-monogram large">{article.author.slice(0, 1)}</div><div><span>Rreth autorit</span><h2>{article.author}</h2><p>{author?.bio ?? "Informacioni për autorin do të shtohet nga redaksia."}</p><Link href={`/autoret/${article.authorSlug}`}>Të gjitha shkrimet ↗</Link></div></div>
    </article>
    {related.length > 0 && <section className="related shell"><div className="section-heading"><div><h2>Vazhdoni leximin<span>.</span></h2></div></div><div className="article-list">{related.map((item, index) => <ArticleRow key={item.slug} article={item} index={index}/>)}</div></section>}
  </>;
}
