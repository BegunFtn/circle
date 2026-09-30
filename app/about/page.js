import {SourceLanguageNote} from "@/context/LanguageProvider";
import {data,Title,Picture} from "@/components/CircleContent";
export const metadata={title:"Бидний тухай"};
export default function About(){const posts=[164,549,157,160].map(id=>data.posts.find(p=>p.id===id)).filter(Boolean);return <><Title title="Бидний тухай" description="Сээкл ХХК · 1996 оноос"/><div className="wrap article"><SourceLanguageNote/><Picture className="wide-image" src={data.categories.find(c=>c.id===43).image} alt="Circle"/>{posts.map(p=><section className="article-section" key={p.id}><span className="eyebrow">ЭХ МЭДЭЭЛЭЛ · {p.date}</span><h2>{p.title}</h2>{p.paragraphs.map((t,i)=><p key={i}>{t}</p>)}{p.gallery.map((u,i)=><Picture src={u} alt={p.title} key={i}/>)}</section>)}</div></>}
