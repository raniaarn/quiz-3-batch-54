import { Layout } from "@/layout";

export default function Home() {
  return (
    <Layout metaTitle="Home" metaDescription="Welcome to Raniaarn's App">
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="px-2 py-8 text-xl font-bold">
            Welcome to Raniaarn's App!
          </div>
        </div>
      </div>
    </Layout>
  )
}