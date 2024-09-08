'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import _ from 'lodash';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Create a debounced function using lodash's debounce
  const debouncedFetch = _.debounce(async (term: string) => {
    try {
      const response = await axios.get('/api/search', {
        params: { query: term },
      });
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }, 500); // Debounce delay in milliseconds

  useEffect(() => {
    // Call the debounced function when searchTerm changes
    if (searchTerm) {
      debouncedFetch(searchTerm);
    }

    // Cleanup function to cancel any pending debounced calls on component unmount
    return () => {
      debouncedFetch.cancel();
    };
  }, [searchTerm, debouncedFetch]);

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search term submitted:', searchTerm);
    // Optionally, perform a search or other action on submit
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className="max-w-md mx-auto sticky top-5 z-10">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          name="search"
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for your favorite recipes.."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition ease-in">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
