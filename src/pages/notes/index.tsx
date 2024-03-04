import dynamic from "next/dynamic";
import { Note, NotesApiResponse } from "./interface";
import { Card } from "@/components/elements/card";
import Link from "next/link";

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

export default function Notes({ data }: NotesApiResponse) {
  const notes = data.data

  return (
    <LayoutComponent metaTitle="Notes" metaDescription="Welcome to Raniaarn's App">
      <div className="px-2 pt-8 text-lg font-bold">
        Notes
      </div>
      <div className="w-full">
        {
          notes.map((note: Note) =>
          (
            <div key={note.id} className="py-2">
              <Link href={`/notes/${note.id}`}>
                <Card
                  title={note.title}
                  description={note.description}
                  timestamp={formatTimestampToDate(note.created_at)}>
                </Card>
              </Link>
            </div>
          )
          )
        }
      </div>
    </LayoutComponent>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes');
  const data = await res.json()
  return { props: { data }, revalidate: 10 }
}