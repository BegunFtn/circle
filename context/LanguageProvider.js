"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
import words from "@/data/circle-language.json";
const LanguageContext=createContext(null);
export function LanguageProvider({children}){
 const [language,setLanguage]=useState("mn");
 const [ready,setReady]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem("language");if(saved==="en"||saved==="mn")setLanguage(saved);}catch{}setReady(true);},[]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem("language",language);}catch{}document.documentElement.lang=language;},[language,ready]);
 const value=useMemo(()=>({language,setLanguage,toggleLanguage:()=>setLanguage(v=>v==="mn"?"en":"mn"),translate:(text)=>language==="en"?(words[text]??text):text,t:{header:{changeLanguage:language==="mn"?"Хэл солих":"Change language"}}}),[language]);
 return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){const context=useContext(LanguageContext);if(!context)throw new Error("LanguageProvider is required");return context;}
export function T({children}){const {translate}=useLanguage();return translate(children);}
export function SourceLanguageNote(){const {language}=useLanguage();return language==="en"?<p className="source-note" lang="en">Original company articles and news are available in Mongolian.</p>:null;}
