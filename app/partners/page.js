import {data} from "@/components/CircleContent";
import PartnersDirectory from "@/components/PartnersDirectory";
export const metadata={title:"Бизнесийн хамтрагчид"};
export default function Page(){return <PartnersDirectory partners={data.posts.filter(p=>p.categories.some(c=>[59,100].includes(c))&&p.title!==".").map(({id,title,image})=>({id,title,image}))}/>}
