'use client';
import { Recipe } from '@/app/util/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get('/api/add');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }
    getRecipes();
  }, []);

  return (
    <div>
      {recipes.length > 0 ? (
        <div className="flex flex-col md:flex-row md:flex-wrap md:space-x-16">
          {recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <SearchItem recipe={recipe} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-wrap text-center px-20 sm:px-2">
          No recipes added yet, select (+) icon to add your own
        </p>
      )}
    </div>
  );
};

export default MyRecipes;
