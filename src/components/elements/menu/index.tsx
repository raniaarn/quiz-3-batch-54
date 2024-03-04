import Link from 'next/link';

export const Menu = () => {
  return (
    <div className="flex mx-4 gap-8">
      <Link href='/' className="w-1/3 w-full font-bold">
        Raniaarn's App
      </Link>
      <Link href='/users' className="3-1/3  ">
        Users
      </Link>
      <Link href='/profile' className="3-1/3 ">
        Profile
      </Link>
      <Link href='/notes' className="3-1/3  ">
        Notes
      </Link>
    </div>
  )
}