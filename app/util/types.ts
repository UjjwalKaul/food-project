export interface Recipe {
  image: string;
  label: string;
  cuisineType: string;
  dishType: string;
  calories: number;
  ingredientLines: string[];
  url: string;
}

export interface SearchResult {
  recipe: Recipe;
}
