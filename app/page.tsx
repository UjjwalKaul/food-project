import Image from 'next/image';
import burger from './assets/burger.jpg';
import Login from '@/components/Login';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
  }
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center">
        <div className="w-full h-full relative">
          <Image
            src={burger}
            alt="Burger Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}
