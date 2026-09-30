"use client";
import {useState} from 'react';
import {useLanguage} from '@/context/LanguageProvider';
import s from './ContactDirectory.module.css';
import ContactInquiry from './ContactInquiry';
export default function ContactDirectory({entries}){
 const {language,translate}=useLanguage();const en=language==='en';const t=(a,b)=>en?b:a;
 const office=entries.find(e=>e.id===155),branches=entries.filter(e=>e.id>2100),departments=entries.filter(e=>e.id<2100&&e.id!==155);
 const [selected,setSelected]=useState(155);const active=entries.find(e=>e.id===selected)||office;
 const phone=v=><a href={'tel:'+v.replace(/[^+\d]/g,'')}>{v}</a>;
 return <div className={`wrap ${s.page}`}><header className={s.heading}><span>CIRCLE · {t('ХОЛБОО БАРИХ','CONTACT')}</span><h1>{t('Холбоо барих','Get in touch')}</h1></header><ContactInquiry/>
 <section><h2>{t('Төв оффис','Head office')}</h2><div className={s.office}><div><small>{t('Хаяг','Address')}</small><p>{t(office.text,'Circle office, 4th floor, Encanto Orgil shopping centre, Encanto Town, 26th khoroo, Bayanzurkh District, Ulaanbaatar, Mongolia')}</p></div><div><small>{t('Утас','Phone')}</small>{phone(office.phone)}<small>{t('Ресепшн','Reception')}</small>{phone(office.reception)}</div><div><small>{t('И-мэйл','Email')}</small><a href="mailto:circle1@orgil.mn">circle1@orgil.mn</a><small>{t('Шуудангийн хаяг','Postal address')}</small><p>{office.email}</p><a href={office.facebook} target="_blank" rel="noreferrer">Facebook ↗</a></div></div></section>
 <section className={s.locations}><div className={s.mapHeading}><h2>{t('Бидний байршил','Our locations')}</h2><label>{t('Салбар сонгох','Choose a location')}<select value={selected} onChange={e=>setSelected(Number(e.target.value))}>{[office,...branches].map(e=><option key={e.id} value={e.id}>{translate(e.title)}</option>)}</select></label></div><iframe title={t('Сонгосон салбарын газрын зураг','Selected location map')} src={`https://maps.google.com/maps?q=${active.lat},${active.lon}&z=15&output=embed&hl=${en?'en':'mn'}`} loading="lazy" allowFullScreen/><div className={s.caption}><div><h3>{translate(active.title)}</h3><p>{translate(active.text)}</p></div><a href={`https://www.google.com/maps/search/?api=1&query=${active.lat},${active.lon}`} target="_blank" rel="noreferrer">{t('Газрын зурагт нээх','Open in Maps')} ↗</a></div></section>
 <section className={s.departments}><h2>{t('Алба, хэлтэстэй холбогдох','Department contacts')}</h2><div className={s.grid}>{departments.map(e=><article key={e.id}><h3>{translate(e.title)}</h3><p>{translate(e.text)}</p>{e.phone&&<div><small>{t('Утас','Phone')}</small>{e.phone.split(',').map(v=><span key={v}>{phone(v.trim())}</span>)}</div>}{e.email&&<div><small>{t('И-мэйл','Email')}</small>{e.email.split(',').map(v=>{const value=v.trim();return <a key={value} href={value.startsWith('https://')?value:'mailto:'+value}>{value.startsWith('https://')?'Zangia.mn ↗':value}</a>})}</div>}</article>)}</div></section></div>;
}
