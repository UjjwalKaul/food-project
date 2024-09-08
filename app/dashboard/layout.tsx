import LogoutButton from '@/components/LogoutButton';
import Link from 'next/link';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-900">
      <header className="sticky top-0 z-10 flex justify-between p-5 shadow-md items-center">
        <Link className="text-3xl font-bold" href="/">
          Dashboard
        </Link>
        <LogoutButton />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
