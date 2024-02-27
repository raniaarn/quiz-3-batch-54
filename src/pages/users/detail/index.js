import { Layout } from "@/layout";

export default function Detail() {
  return (
    <Layout metaTitle="Profile" metaDescription="Your Profile Page">
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="px-2 pt-8 text-lg font-bold">
            Profile
          </div>
          <div className="px-2 text-lg">
            Rania Maharani Narendra
          </div>
          <div className="px-2 pb-8 text-lg">
            raniamn03@gmail.com
          </div>
        </div>
      </div>
    </Layout>
  )
}