import { useEffect } from "react";
import Image from 'next/image';
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(
  () => import('@/layout').then(mod => mod.Layout)
);

export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then((res) => console.log('response =>', res))
      .catch((err) => console.log("err => ", err));
  }, [])
  return (
    <>
      <LayoutComponent metaTitle="Home" metaDescription="Welcome to Raniaarn's App">
        <div className="flex flex-col">
          <div className="flex-grow">
            <div className="px-2 py-8 text-xl font-bold">
              Welcome to Raniaarn's App!
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-screen h-screen p-4 mb-16">
            <Image
              src="/landing.png"
              layout="responsive"
              width={1440}
              height={700}
              objectFit="contain"
              alt="raniaarn img" />
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}