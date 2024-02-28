import { Layout } from "@/layout";
import { useRouter } from "next/router";

export default function UsersByName() {
  const router = useRouter();
  const { id } = router?.query

  return (
    <Layout metaTitle="Home" metaDescription="Welcome to Raniaarn's App">
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="px-2 py-8 text-xl font-bold">
            Users by Name {id}
          </div>
        </div>
      </div>
    </Layout>
  )
}