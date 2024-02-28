import { Layout } from "@/layout";

export default function UsersDetail() {
  return (
    <Layout metaTitle="Home" metaDescription="Welcome to Raniaarn's App">
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="px-2 py-8 text-xl font-bold">
            Users detail
          </div>
        </div>
      </div>
    </Layout>
  )
}