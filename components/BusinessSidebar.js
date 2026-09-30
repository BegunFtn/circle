import Link from "next/link";
import {Globe,ShoppingBasket,Building2,Truck,Dumbbell,Film} from "lucide-react";
import {sectors} from "@/data/business-sectors";
import {T} from "@/context/LanguageProvider";
const icons={63:Globe,64:ShoppingBasket,68:Building2,33:Truck,66:Dumbbell,65:Film};
export default function BusinessSidebar({active}){return <aside className="business-sidebar"><nav aria-label="Бизнесийн ангилал">{sectors.map(c=>{const Icon=icons[c.id];return <Link key={c.id} href={`/business/${c.id}`} aria-current={active===c.id?"page":undefined}><Icon size={22} strokeWidth={1.6}/><T>{c.name}</T></Link>})}</nav></aside>}
