import dynamic from "next/dynamic";
import { Post, PostsApiResponse } from "./interface";
import { Card } from "@/components/elements/card";
import Link from "next/link";

const LayoutComponent = dynamic(
  () => import('@/layout').then(mod => mod.Layout)
);

export default function Posts({ posts }: PostsApiResponse) {
  console.log(posts)

  return (
    <LayoutComponent metaTitle="Posts" metaDescription="Welcome to Raniaarn's App">
      <div className="px-2 pt-8 text-lg font-bold">
        Posts
      </div>
      <div className="w-full">
        {
          posts.map((post: Post) =>
          (
            <div key={post.id} className="py-2">
              <Link href={`/notes/${post.id}`}>
                <Card
                  title={post.title}
                  description={post.body}
                  timestamp={`user: ${post.userId}`}>
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

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}