import {T,SourceLanguageNote} from "@/context/LanguageProvider";
import Link from "next/link";
import data from "@/data/circle.json";
export { data };
export function Picture({src,alt="",className=""}) {return src ? <img src={src} alt={alt} className={className} loading="lazy"/> : <div className={`placeholder ${className}`}>CIRCLE</div>}
export function Title({eyebrow="CIRCLE · СЭЭКЛ ХХК",title,description}) {return <section className="page-title wrap"><span className="eyebrow"><T>{eyebrow}</T></span><h1><T>{title}</T></h1>{description&&<p><T>{description}</T></p>}</section>}
export function Cards({posts}) {return <><SourceLanguageNote/><div className="cards">{posts.map(p=><Link className="card" href={`/articles/${p.id}`} key={p.id}><Picture src={p.image||p.gallery[0]} alt={p.title}/><div><time>{p.date}</time><h3>{p.title} <span>↗</span></h3>{p.text&&<p>{p.text.slice(0,140)}…</p>}</div></Link>)}</div></>}
export function Directions() {const order=[63,64,68,33,66,65];return <div className="directions">{order.map(id=>data.categories.find(c=>c.id===id)).filter(Boolean).map(c=><Link href={`/business/${c.id}`} className="direction" key={c.id}><Picture src={c.image} alt=""/><div><h3><T>{c.name}</T></h3><span aria-hidden="true">→</span></div></Link>)}</div>}
