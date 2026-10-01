import {data,Title} from "@/components/CircleContent";
import NewsFeatures from "@/components/NewsFeatures";
import {T} from "@/context/LanguageProvider";
import {ArrowDown} from "lucide-react";
export const metadata={title:"Мэдээ, мэдээлэл"};
export default function Page(){const category=data.categories.find(c=>c.id===72);return <><section className="news-hero"><img src={category.image} alt=""/><div className="news-hero-shade"/><div className="wrap news-hero-copy"><span className="news-hero-kicker"><T>Мэдээ Мэдээлэл</T></span><p><T>{category.description}</T></p><a href="#latest-news"><span className="news-scroll-label"><T>Доош харах</T></span><ArrowDown size={24} aria-hidden="true"/></a></div></section><section className="wrap section news-section" id="latest-news"><Title title="Сүүлийн үеийн мэдээлэл"/><NewsFeatures posts={data.posts.filter(p=>p.categories.includes(72)&&p.title!==".")}/></section></>}
