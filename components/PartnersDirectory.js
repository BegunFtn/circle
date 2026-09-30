"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import styles from "./PartnersDirectory.module.css";

export default function PartnersDirectory({ partners }) {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const en = language === "en";
  const visible = partners.filter(p => p.title.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className={styles.page}>
    <header className={`${styles.intro} wrap`}>
      <span className={styles.eyebrow}>CIRCLE · {en ? "PARTNERS" : "ХАМТЫН АЖИЛЛАГАА"}</span>
      <div className={styles.heading}>
        <h1>{en ? "Our business partners" : "Бизнесийн хамтрагчид"}</h1>
        <p>{en ? "Discover the brands we work with." : "Бидний хамтран ажилладаг брэндүүдтэй танилцаарай."}</p>
      </div>
    </header>
    <section className={`wrap ${styles.directory}`} aria-label={en ? "Partner brands" : "Хамтрагч брэндүүд"}>
      <div className={styles.toolbar}>
        <p aria-live="polite">{en ? "Brands" : "Брэндүүд"}<span>{visible.length} / {partners.length}</span></p>
        <label className={styles.search}><Search size={18} aria-hidden="true"/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={en ? "Search brands…" : "Брэндийн нэрээр хайх…"} aria-label={en ? "Search brands" : "Брэндийн нэрээр хайх"}/></label>
      </div>
      <ul className={styles.grid}>{visible.map(p=><li key={p.id} className={styles.brand}>
        <div className={styles.logo}><img src={p.image} alt={p.title} loading="lazy"/></div>
        <h2>{p.title}</h2>
      </li>)}</ul>
      {!visible.length && <div className={styles.empty}><p>{en ? "No matching brands found." : "Тохирох брэнд олдсонгүй."}</p><button onClick={()=>setQuery("")}>{en ? "Show all brands" : "Бүх брэндийг харах"}</button></div>}
      <div className={styles.contact}><div><h2>{en ? "Work with Circle" : "Бидэнтэй хамтран ажиллах"}</h2><p>{en ? "Contact our team with your partnership enquiry." : "Хамтын ажиллагааны санал хүсэлтээ бидэнд илгээгээрэй."}</p></div><Link href="/contact">{en ? "Contact us" : "Холбоо барих"}<ArrowUpRight size={20}/></Link></div>
    </section>
  </div>;
}
