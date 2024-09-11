'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const AddRecipe = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl p-4">Add your own recipe</h1>
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipe;

const AddRecipeForm = () => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    image: '',
    label: '',
    cuisineType: '',
    dishType: '',
    calories: 0,
    ingredientLines: [''],
    url: '',
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle ingredient lines change
  const handleIngredientChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newIngredients = [...formData.ingredientLines];
    newIngredients[index] = e.target.value;
    setFormData({
      ...formData,
      ingredientLines: newIngredients,
    });
  };

  // Add new ingredient field
  const addIngredientField = () => {
    setFormData({
      ...formData,
      ingredientLines: [...formData.ingredientLines, ''],
    });
  };

  // Remove ingredient field
  const removeIngredientField = (index: number) => {
    const newIngredients = formData.ingredientLines.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      ingredientLines: newIngredients,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user?.email) {
      alert('You must be logged in to add a recipe');
      return;
    }

    const recipeData = {
      ...formData,
      userId: session.user.email,
    };
    console.log(recipeData);

    const response = await axios.post('/api/add', recipeData);
    if (response.status === 201) {
      alert('Recipe added successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-5">
      {/* Label */}
      <div>
        <label htmlFor="label">Label</label>
        <input
          type="text"
          name="label"
          id="label"
          value={formData.label}
          onChange={handleInputChange}
          required
          className="text-black border rounded p-2 w-full"
          placeholder="Recipe name"
        />
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image">Image URL</label>
        <input
          type="url"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleInputChange}
          required
          placeholder="Image"
          className="text-black border rounded p-2 w-full"
        />
      </div>

      {/* Cuisine Type */}
      <div>
        <label htmlFor="cuisineType">Cuisine Type</label>
        <input
          type="text"
          name="cuisineType"
          id="cuisineType"
          value={formData.cuisineType}
          onChange={handleInputChange}
          required
          placeholder="Cuisine"
          className="text-black border rounded p-2 w-full"
        />
      </div>

      {/* Dish Type */}
      <div>
        <label htmlFor="dishType">Dish Type</label>
        <input
          type="text"
          name="dishType"
          id="dishType"
          value={formData.dishType}
          onChange={handleInputChange}
          required
          placeholder="Breakfast / Lunch / Dinner"
          className="text-black border rounded p-2 w-full"
        />
      </div>

      {/* Calories */}
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          value={formData.calories}
          onChange={handleInputChange}
          required
          placeholder="e.g. 800.12"
          className="text-black border rounded p-2 w-full"
        />
      </div>

      {/* Ingredients */}
      <div>
        <label htmlFor="ingredientLines">Ingredients</label>
        {formData.ingredientLines.map((ingredient, index) => (
          <div key={index} className="flex items-center mt-2">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e)}
              placeholder={`Ingredient ${index + 1}`}
              className="text-black border rounded p-2 w-full"
              required
            />
            {formData.ingredientLines.length > 1 && (
              <button
                type="button"
                onClick={() => removeIngredientField(index)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addIngredientField}
          className="mt-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Add Another Ingredient
        </button>
      </div>

      {/* URL */}
      <div>
        <label htmlFor="url">Recipe URL</label>
        <input
          type="url"
          name="url"
          id="url"
          value={formData.url}
          onChange={handleInputChange}
          className="text-black border rounded p-2 w-full"
          placeholder="(optional)"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Recipe
        </button>
      </div>
    </form>
  );
};
