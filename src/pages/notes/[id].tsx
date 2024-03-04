import dynamic from "next/dynamic";
import { Note } from "./interface";
import { Card } from "@/components/elements/card";

const LayoutComponent = dynamic(
  () => import('@/layout').then(mod => mod.Layout)
);

function formatTimestampToDate(timestamp: any) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Bulan dimulai dari 0, tambahkan 1 untuk mendapatkan bulan yang benar
  const day = date.getDate().toString().padStart(2, '0');

  return `${day}-${month}-${year}`;
}

export default function DetailNotes(notes: Note) {
  const note_detail = notes.data.data

  return (
    <LayoutComponent metaTitle="Detail Notes" metaDescription="Welcome to Raniaarn's App">
      <div className="px-2 pt-8 text-lg font-bold">
        {note_detail.title}
      </div>
      <div className="w-full">
        <Card
          title={note_detail.title}
          description={note_detail.description}
          timestamp={formatTimestampToDate(note_detail.created_at)}>
        </Card>
      </div>
    </LayoutComponent>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes');
  const data = await res.json()
  const notes = data.data
  
  const paths = notes.map((item: any) => ({
    params: {
      id: item.id
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context:any) {
  const { id } = context.params;
  const res = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`);
  const data = await res.json()
  return { props: { data }, revalidate: 10 }
}