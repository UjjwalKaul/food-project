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

        <LogoutButton />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
