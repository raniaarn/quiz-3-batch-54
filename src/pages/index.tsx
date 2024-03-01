import { Layout } from "@/layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then((res) => console.log('response =>', res))
      .catch((err) => console.log("err => ", err));
  }, [])
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