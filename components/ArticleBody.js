const leadingEmoji = /^([\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u200D]+)\s*/u;

function Paragraph({ text }) {
  const match = text.match(leadingEmoji);
  if (!match) return <p>{text}</p>;
  return <p className="article-icon-row"><span className="article-inline-icon">{match[1]}</span><span>{text.slice(match[0].length)}</span></p>;
}

export default function ArticleBody({ paragraphs }) {
  const blocks = [];
  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].startsWith('✅')) {
      const items = [];
      const start = i;
      while (i < paragraphs.length && paragraphs[i].startsWith('✅')) {
        items.push(paragraphs[i]);
        i++;
      }
      i--;
      blocks.push(<ul className="article-checklist" key={start}>{items.map((text, index) => <li key={index}><span className="article-inline-icon">✅</span><span>{text.replace(/^✅\s*/, '')}</span></li>)}</ul>);
    } else {
      blocks.push(<Paragraph key={i} text={paragraphs[i]} />);
    }
  }
  return <div className="article-body">{blocks}</div>;
}
