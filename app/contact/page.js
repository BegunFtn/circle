import data from '@/data/circle.json';
import details from '@/data/contact-details.json';
import ContactDirectory from '@/components/ContactDirectory';
export const metadata={title:'Холбоо барих'};
export default function Contact(){return <ContactDirectory entries={data.posts.filter(p=>details[p.id]).map(p=>({id:p.id,title:p.title,text:p.text,...details[p.id]}))}/>}
