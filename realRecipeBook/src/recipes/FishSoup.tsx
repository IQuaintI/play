import { Recipe } from "../components/Recipes";

interface FishSoupProps {
  recipe: Recipe;
}

function FishSoup({ recipe }: FishSoupProps) {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  );
}

export default FishSoup;
