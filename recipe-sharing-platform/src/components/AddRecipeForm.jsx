import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [validate, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !validate) {
      setErrors("All fields are required.");
      return;
    }

    const ingredientsArray = ingredients.split(",").map(item => item.trim());
    if (ingredientsArray.length < 2) {
      setErrors("Please enter at least two ingredients.");
      return;
    }

    setErrors(""); // Clear any errors

    // Mock submission (in a real app, you would send the data to a backend or state)
    console.log({
      title,
      ingredients: ingredientsArray,
      validate
    });

    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submit a New Recipe</h1>
      {errors && <p className="text-red-500 mb-4">{errors}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-semibold">
            Ingredients (separated by commas)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter ingredients separated by commas (e.g., eggs, flour, sugar)"
            rows="3"
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-lg font-semibold">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={validate}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter the preparation steps"
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
