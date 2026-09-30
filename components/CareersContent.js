"use client";

import { useLanguage } from "@/context/LanguageProvider";

const english = {
  benefits: [
    "Work alongside an energetic and skilled team.",
    "Equal opportunities for every employee to grow and advance.",
    "A supportive environment that encourages initiative and ambition.",
    "Competitive pay and meaningful rewards based on results.",
    "Opportunities to learn and develop your skills across different business sectors."
  ],
  selection: ["Recruitment", "Submit an application and CV", "Application screening", "Initial interview", "Practical training period", "Assessment", "Final decision and permanent employment"],
  documents: ["Two passport-style photographs", "School or university diploma and professional qualifications", "Identity card, copy and supporting records", "Proof of residence from your local khoroo", "Social insurance record book"],
  steps: ["Application", "Interview", "Assessment", "Practical training", "Decision", "Permanent employee"],
  jobs: {1198:"Accountant",1195:"Sales assistant",1191:"International relations manager",1189:"Sales director",1187:"Marketing manager",1185:"Erdenet branch director"}
};

function RuledHeading({ children, id }) {
  return <h2 className="careers-heading" id={id}><span>{children}</span></h2>;
}

export default function CareersContent({ benefits, selection, documents, steps, jobs, banner }) {
  const { language } = useLanguage();
  const en = language === "en";
  const copy = (mn, eng) => en ? eng : mn;
  const list = (items) => <ul className="careers-bullets">{items.map((text, i) => <li key={i}>{text}</li>)}</ul>;
  return <>
    <section className="careers-hero">
      <img src={banner} alt=""/>
      <div className="careers-hero-shade"/>
      <div className="wrap careers-hero-copy">
        <span className="careers-kicker">{copy("Хүний нөөц", "Careers")}</span>
        <h1>{copy("Бид монгол хүний саруул ухаанд итгэдэг.", "We believe in the talent and potential of Mongolian people.")}</h1>
        <a href="#career-vacancies">{copy("Нээлттэй ажлын байр", "Job opportunities")} <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <div className="wrap careers-page">
      <section aria-labelledby="career-benefits">
        <RuledHeading id="career-benefits">{copy("Бидэнтэй нэгдвэл", "Why join us")}</RuledHeading>
        <div className="careers-benefits">
          {list(en ? english.benefits : benefits.paragraphs)}
          <img src={benefits.image} alt={copy("Circle компанийн хамт олон", "The Circle team")} loading="lazy"/>
        </div>
      </section>

      <section aria-labelledby="career-selection">
        <RuledHeading id="career-selection">{copy("Сонгон шалгаруулалт", "Our recruitment process")}</RuledHeading>
        <img className="careers-process-banner" src={selection.image} alt="" loading="lazy"/>
        <div className="careers-recruitment">
          <ol className="careers-steps" aria-label={copy("Сонгон шалгаруулалтын үе шат", "Recruitment stages")}>
            {steps.map((step, index) => <li key={step.id}>
              <span className="careers-step-number" aria-hidden="true">{index + 1}</span>
              <img src={step.image} alt="" loading="lazy"/>
              <h3>{en ? english.steps[index] : step.name}</h3>
            </li>)}
          </ol>
          <div className="careers-requirements">
            <h3>{copy("Сонгон шалгаруулалт", "Selection process")}</h3>
            {list(en ? english.selection : selection.paragraphs)}
            <h3>{copy("Бүрдүүлэх материал", "Documents to prepare")}</h3>
            {list(en ? english.documents : documents.paragraphs)}
          </div>
        </div>
      </section>

      <section className="careers-vacancies" aria-labelledby="career-vacancies">
        <RuledHeading id="career-vacancies">{copy("Нээлттэй ажлын байр", "Job opportunities")}</RuledHeading>
        <p className="careers-vacancy-note">{copy("Эх сайтад нийтэлсэн ажлын байрны мэдээлэл. Одоо нээлттэй эсэхийг хүний нөөцөөс лавлана уу.", "These listings were published on the original website. Please contact the company to confirm current availability.")}</p>
        <div className="careers-job-list">{jobs.map(job => <details key={job.id}>
          <summary><span>{en ? english.jobs[job.id] || job.title : job.title}</span><time dateTime={job.date}>{job.date}</time><span className="careers-job-toggle" aria-hidden="true">+</span></summary>
          <div className="careers-job-description">
            {en && <p className="source-note">The original job requirements below are in Mongolian.</p>}
            <div lang="mn">{job.paragraphs.map((text, index) => <p key={index}>{text}</p>)}</div>
          </div>
        </details>)}</div>
        <div className="careers-contact"><p>{copy("Ажлын байрны талаар бидэнтэй холбогдоорой.", "Contact us to enquire about job opportunities.")}</p><a href="tel:70113034">7011-3034</a><a href="mailto:circle1@orgil.mn">circle1@orgil.mn</a></div>
      </section>
    </div>
  </>;
}
