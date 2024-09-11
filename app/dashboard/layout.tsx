import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 z-10 flex justify-between p-5 shadow-md items-center bg-slate-800 mb-12">
        <Link
          className="flex items-center gap-2 text-3xl font-bold"
          href="/dashboard">
          <Image
            className="mb-[0.6rem]"
            src={logo}
            width={35}
            height={35}
            alt="Logo"
          />
          <span>Dashboard</span>
        </Link>
        <div className="flex items-center">
          <Link href="/dashboard/add">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M10 4v6H4v2h6v6h2v-6h6v-2h-6V4h-2z" />
              </svg>

              <span>Add Recipe</span>
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
