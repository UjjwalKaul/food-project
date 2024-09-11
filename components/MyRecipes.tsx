'use client';
import { Recipe } from '@/app/util/types';
import { useState } from 'react';
const MyRecipes = () => {
  const [recipes] = useState<Recipe[]>([]);
  return (
    <div className="w-[30rem] h-[20rem] flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {recipes.length > 0 ? (
        <div>Recipes</div>
      ) : (
        <p className="text-gray-500 text-wrap text-center px-20 sm:px-2">
          No recipes added yet select (+) icon to add your own
        </p>
      )}
    </div>
  );
};

export default MyRecipes;
