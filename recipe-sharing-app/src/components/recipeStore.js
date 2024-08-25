// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => set((state) => {
    const lowerCaseTerm = term.toLowerCase();
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerCaseTerm) ||
        recipe.ingredients?.some(ingredient => ingredient.toLowerCase().includes(lowerCaseTerm))
      ),
    };
  }),
  
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients?.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
    ),
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const filteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients?.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
    );
    return { recipes: updatedRecipes, filteredRecipes };
  }),
}));

export { useRecipeStore };
