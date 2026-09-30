"use client";
import {useId,useRef,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ChevronDown} from "lucide-react";
import {sectors} from "@/data/business-sectors";
import {T} from "@/context/LanguageProvider";
export default function BusinessDropdown({onNavigate}){const [open,setOpen]=useState(false);const id=useId();const button=useRef(null);const path=usePathname();function close(){setOpen(false);onNavigate?.();}return <div className="business-dropdown" onMouseEnter={()=>setOpen(true)} onMouseLeave={e=>{if(!e.currentTarget.contains(document.activeElement))setOpen(false);}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}} onKeyDown={e=>{if(e.key==="Escape"){setOpen(false);button.current?.focus();}}}><button ref={button} type="button" className="business-trigger" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(v=>!v)} data-active={path.startsWith("/business")}><T>Бизнесийн чиглэл</T><ChevronDown size={14}/></button><div id={id} className="business-dropdown-panel" hidden={!open}><Link href="/business" onClick={close}><T>Бүх чиглэл</T></Link>{sectors.map(c=><Link key={c.id} href={`/business/${c.id}`} aria-current={path===`/business/${c.id}`?"page":undefined} onClick={close}><T>{c.name}</T></Link>)}</div></div>}
