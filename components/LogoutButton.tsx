'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter(); // Use useRouter for client-side redirection

  const handleLogout = async () => {
    try {
      await signOut({
        redirect: false, // Prevent automatic redirection
      });
      router.push('/'); // Redirect to the home page manually
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className=" text-lg px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-800 transition ease-linear">
      Logout
    </button>
  );
};

export default LogoutButton;
