'use client';

import Image from 'next/image';

const SearchItem = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full" style={{ height: '150px' }}>
        {' '}
        <Image
          className="rounded-t-lg object-cover"
          src={recipe.image}
          alt={recipe.label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipe.label}
        </h5>
        <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1.5  rounded dark:bg-blue-900 dark:text-blue-300 m-1">
          {recipe.cuisineType}
        </span>
        <span className="bg-purple-100 text-purple-800 font-medium px-3 py-1.5  rounded dark:bg-purple-900 dark:text-purple-300 m-1">
          {recipe.dishType}
        </span>
        <span className="bg-red-100 text-red-800 font-medium px-3 py-1.5  rounded dark:bg-red-900 dark:text-red-300 m-1">
          {Math.ceil(recipe.calories)} kcal
        </span>
        <p className="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
          <ul>{}</ul>
        </p>
        <a
          href={recipe.url}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SearchItem;
