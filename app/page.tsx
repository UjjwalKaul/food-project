import Image from 'next/image';
import burger from './assets/burger.jpg';
import Login from '@/components/Login';

export default async function Home() {
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
