'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRef, useState } from 'react';

const Login = () => {
  const session = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmitting(!isSubmitting);
    e.preventDefault();
    const email = mailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    await signIn('credentials', {
      email,
      password,
    });
    setIsSubmitting(!isSubmitting);
  }

  return (
    <div className="border-2 border-slate-600 p-8 md:p-12 rounded-xl max-w-md mx-auto">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-4">
        Delicious Recipes
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label className="text-lg md:text-xl">Email</label>
          <input
            type="email"
            placeholder="xyz@google.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ref={mailRef}
            required
          />

          <label className="text-lg md:text-xl">Password</label>
          <input
            type="password"
            placeholder="•••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ref={passwordRef}
            required
          />

          <div className="flex justify-center">
            <button
              disabled={isSubmitting}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit">
              Login
            </button>
            <button
              onClick={() => {
                signOut();
              }}>
              Sign out
            </button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default Login;
