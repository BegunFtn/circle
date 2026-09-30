"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { introductionsEn } from "@/data/business-introductions-en";

const headings = {
  63: "Гадаад худалдаа",
  64: "“ОРГИЛ” ҮНДЭСНИЙ СҮЛЖЭЭ СУПЕРМАРКЕТУУД",
  33: "Голден Свит ХХК — Агуулах худалдаа",
  66: "Энканто спорт комплекс",
  65: "Prime Cineplex кино театр",
};
const leads = {
  63: "Сээкл ХХК нь хүнсний бүтээгдэхүүн, бичиг хэрэг, гэр ахуйн бараа, барилгын материалыг Монголын зах зээлд импортлон худалдаалдаг.",
  33: "Голден Свит ХХК нь импортлогч компани бөгөөд “Оргил” сүлжээ супермаркет, худалдааны бөөний төвөөрөө дамжуулан дэлхийд тэргүүлэгч брэндүүдийг импортлон оруулж ирдэг.",
};

export default function SectorIntroduction({ categoryId, post }) {
  const { language } = useLanguage();
  if (!post) return null;
  const english = language === "en" ? introductionsEn[post.id] : null;
  const isBuilding = categoryId === 68;
  const title = english?.title || (isBuilding ? post.paragraphs[0] : headings[categoryId] || post.title);
  const paragraphs = english?.paragraphs || (isBuilding ? post.paragraphs.slice(1) : post.paragraphs).filter(text => text.trim() !== "Компани бүтэц:");
  const lead = english ? english.lead : leads[categoryId];
  return (
    <header className="business-introduction sector-introduction" lang={language}>
      <h2>{title}</h2>
      <div>
        {lead && <p>{lead}</p>}
        {paragraphs.map((text, index) => <p key={index}>{text}</p>)}
      </div>
      <p className="source-note">{language === "en" ? "Original profile published: " : "Эх танилцуулгын огноо: "}<time dateTime={post.date}>{post.date}</time>{language === "en" ? ". Figures reflect the original publication." : ". Тоон мэдээлэл нь тухайн нийтлэлийн үеийнх болно."}</p>
    </header>
  );
}
