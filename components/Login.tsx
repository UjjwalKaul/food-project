'use client';
import { signIn, useSession } from 'next-auth/react';
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
  }

  return (
    <div className="border-2 border-slate-600 p-8 md:p-16 rounded-xl max-w-md mx-auto">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-4">
        Delicious Recipes
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <label className="text-lg md:text-xl">Email</label>
          <input
            type="email"
            placeholder="xyz@google.com"
            className="p-4 rounded-md text-lg md:text-xl text-black focus:bg-slate-300"
            ref={mailRef}
            required
          />

          <label className="text-lg md:text-xl">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-md text-lg md:text-xl text-black focus:bg-slate-300"
            ref={passwordRef}
            required
          />

          <div className="flex justify-center">
            <button
              disabled={isSubmitting}
              className="bg-blue-600 py-2 px-4 hover:bg-blue-800 rounded-md transition ease-linear text-lg md:text-xl"
              type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default Login;
