"use client";
import BusinessDropdown from "@/components/BusinessDropdown";
import LanguageToggle from "@/components/LanguageToggle";
import CinematicThemeSwitcher from "@/components/ui/cinematic-theme-switcher";
import {T} from "@/context/LanguageProvider";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
const links=[["/about","Бидний тухай"],["/business","Бизнесийн чиглэл"],["/news","Мэдээ, мэдээлэл"],["/partners","Хамтрагчид"],["/careers","Хүний нөөц"],["/contact","Холбоо барих"]];
export default function CircleHeader(){const path=usePathname();const [open,setOpen]=useState(false);const item=([href,label])=>href==="/business"?<BusinessDropdown key={href} onNavigate={()=>setOpen(false)}/>:<Link key={href} href={href} aria-current={path.startsWith(href)?"page":undefined} onClick={()=>setOpen(false)}><T>{label}</T></Link>;return <><a className="skip" href="#main"><T>Агуулга руу шилжих</T></a><div className="utility"><div className="wrap"><span><T>СЭЭКЛ ХХК</T><i/><T>1996 оноос</T></span><div className="utility-actions"><div className="site-switchers"><LanguageToggle/><CinematicThemeSwitcher/></div><a className="utility-phone" href="tel:70113034">7011-3034</a><a href="mailto:circle1@orgil.mn">circle1@orgil.mn</a></div></div></div><header className="site-header"><div className="desktop-nav wrap"><nav aria-label="Үндсэн цэс">{links.slice(0,3).map(item)}</nav><Link className="brand" href="/" aria-label="Circle — Нүүр хуудас"><img src="/circle/logo.png" alt="Сээкл ХХК"/><span>CIRCLE<small>COMPANY LIMITED</small></span></Link><nav aria-label="Нэмэлт цэс">{links.slice(3).map(item)}</nav><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}><T>{open?"Хаах ×":"Цэс ☰"}</T></button></div><nav id="mobile-menu" className="mobile-nav" aria-label="Гар утасны цэс" hidden={!open}>{links.map(item)}</nav></header></>}
