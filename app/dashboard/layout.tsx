import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 z-10 flex justify-between p-5 shadow-md items-center bg-slate-800 mb-12">
        <Link className="flex items-center gap-2" href="/dashboard">
          <Image
            className="mb-[0.6rem]"
            src={logo}
            width={35}
            height={35}
            alt="Logo"
          />
          <span className="text-xl sm:text-3xl font-bold">Dashboard</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/dashboard/recipes">
            <button
              type="button"
              className="text-white px-5 py-3.5  bg-green-700 hover:bg-green-800 rounded-lg md:px-4 md:py-2 text-center flex items-center w-full md:w-auto dark:bg-green-600 dark:hover:bg-green-700">
              <span className="hidden md:inline text-lg">My Recipes</span>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 sm:ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
          <Link href="/dashboard/add">
            <button
              type="button"
              className="bg-gray-300 px-3.5 py-2.5 hover:bg-gray-400 text-gray-800 md:px-4 md:py-2 rounded-md inline-flex items-center justify-center">
              <svg
                className="fill-current w-5 h-5 mr-1 mb-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M10 4v6H4v2h6v6h2v-6h6v-2h-6V4h-2z" />
              </svg>
              <span className="hidden md:inline text-lg">Add Recipe</span>
            </button>
          </Link>
          <LogoutButton />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
