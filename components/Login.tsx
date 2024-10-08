'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (result?.ok) {
      router.push('/dashboard');
    } else {
      // Handle login error (e.g., show error message)
      console.error('Login failed');
    }

    setIsSubmitting(false);
  }

  return (
    <section className="bg-gray-900 dark:bg-gray-900 text-gray-100 dark:text-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4 md:space-y-6">
        <div className="flex justify-center">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-100 md:text-3xl lg:text-4xl dark:text-white">
            Delicious Recipes
          </h1>
        </div>

        <form onSubmit={loginUser} className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
              Email
            </label>
            <input
              value={data.email}
              type="email"
              name="email"
              id="email"
              className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="xyz@gmail.com"
              required
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
              Password
            </label>
            <input
              value={data.password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-700 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              required
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <button
              disabled={isSubmitting}
              className="text-normal text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md px-8 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition ease-linear"
              type="submit">
              Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Don&apos;t have an account?{' '}
              <Link className="hover:underline" href="/register">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
