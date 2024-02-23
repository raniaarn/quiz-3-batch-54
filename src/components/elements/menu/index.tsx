import Link from 'next/link';

export const Menu = () => {
  return (
    <div className="flex">
      <Link href='/' className="w-1/2 w-full font-bold">
        Raniaarn's App
      </Link>
      <Link href='/profile' className="2-1/2 underline ">
        Profile
      </Link>
    </div>
  )
}