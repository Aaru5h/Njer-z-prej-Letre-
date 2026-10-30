import Link from "next/link";
import type { Article } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export default function ArticleRow({ article, index }: { article: Article; index?: number }) {
  return <Link className="article-row" href={`/shkrime/${article.slug}`}><span className="article-index">{String((index ?? 0) + 1).padStart(2, "0")}</span><div className="article-row-main"><span className="article-meta">{article.category} <i/> {article.read}</span><h3>{article.title}</h3><p>{article.excerpt}</p></div><span className="article-row-author">{article.author}</span><span className="row-arrow"><ArrowIcon size={24}/></span></Link>;
}
