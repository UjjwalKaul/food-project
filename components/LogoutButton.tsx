'use client';

import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-md bg-blue-700 m-2 hover:bg-blue-800 transition ease-linear">
      Logout
    </button>
  );
};

export default LogoutButton;
