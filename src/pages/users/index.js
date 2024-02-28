import { Layout } from "@/layout";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Users() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Layout metaTitle="Home" metaDescription="Welcome to Raniaarn's App">
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="px-2 py-8 space-y-4">
            <p className="text-xl font-bold">
              Users
            </p>
            <button class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
              <Link href={currentPath + '/rania'} className="2-1/2">
                Rania
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}