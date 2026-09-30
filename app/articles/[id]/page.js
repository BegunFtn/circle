import ArticleBody from "@/components/ArticleBody";
import {SourceLanguageNote} from "@/context/LanguageProvider";
import Link from "next/link";
import {notFound} from "next/navigation";
import {data,Title,Picture} from "@/components/CircleContent";
export function generateStaticParams(){return data.posts.map(p=>({id:String(p.id)}))}
export default async function Article({params}){const {id}=await params;const p=data.posts.find(p=>p.id===Number(id));if(!p)notFound();return <><Title eyebrow={`CIRCLE · ${p.date}`} title={p.title}/><article className="wrap article"><SourceLanguageNote/><Picture className="wide-image" src={p.image} alt={p.title}/>{p.details&&<dl className="details">{Object.entries(p.details).map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}<ArticleBody paragraphs={p.paragraphs}/>{p.gallery.filter(u=>u!==p.image).map((u,i)=><Picture key={i} src={u} alt={p.title}/>)}<p className="source-note">Эх сайтад нийтэлсэн огноо: {p.date}. Тоон мэдээлэл нь тухайн нийтлэлийн үеийн мэдээлэл болно.</p><Link className="text-link" href="/business">Бизнесийн чиглэлүүд рүү ↗</Link></article></>}
