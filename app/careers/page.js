import data from "@/data/circle.json";
import CareersContent from "@/components/CareersContent";
export const metadata={title:"Хүний нөөц"};
export default function Page() {
  return <CareersContent
    benefits={data.posts.find(p => p.id === 136)}
    selection={data.posts.find(p => p.id === 141)}
    documents={data.posts.find(p => p.id === 146)}
    steps={[75, 76, 77, 78, 79, 80].map(id => data.categories.find(c => c.id === id))}
    jobs={data.posts.filter(p => p.categories.includes(85))}
    banner={data.categories.find(c => c.id === 74).image}
  />;
}
