"use client";
import Link from "next/link";
import { T, useLanguage } from "@/context/LanguageProvider";
import { newsEnglish } from "@/data/news-en";

// Adapted from the original travel itinerary's alternating image/text panels.
export default function NewsFeatures({ posts }) {
  const { language } = useLanguage();
  return <div className="news-features">{posts.map((post, index) => {
    const copy = language === "en" ? newsEnglish[post.id] || post : post;
    const image = post.image || post.gallery[0];
    const excerpt = copy.text.replace(/\s+/g, " ").trim();
    const summary = excerpt.length > 280 ? excerpt.slice(0, 280).replace(/\s+\S*$/, "") + "…" : excerpt;
    const number = String(index + 1).padStart(2, "0");
    return <article className="news-feature" key={post.id}>
      <div className="news-feature-copy">
        <span className="news-feature-number" aria-hidden="true">{number}</span>
        <div className="news-feature-date"><span aria-hidden="true"/><time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time></div>
        <h2><Link href={`/articles/${post.id}`}>{copy.title}</Link></h2>
        {summary && <p>{summary}</p>}
        <Link className="news-feature-link" href={`/articles/${post.id}`}><T>Дэлгэрэнгүй →</T></Link>
      </div>
      <Link className="news-feature-visual" href={`/articles/${post.id}`} aria-label={copy.title}>
        <span className="news-feature-image-label" aria-hidden="true"><T>Мэдээ, мэдээлэл</T><span>{number}</span></span>
        <div className="news-feature-image">{image ? <img src={image} alt={copy.title} loading="lazy"/> : <span className="placeholder">CIRCLE</span>}</div>
      </Link>
    </article>;
  })}</div>;
}
