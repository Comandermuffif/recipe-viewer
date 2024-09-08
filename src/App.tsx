import Recipe from './Recipe';
import { ChangeEvent, useState } from 'react';
import RecipeData from './types';

export default function App() {
  const [recipeData, setRecipe] = useState<RecipeData | null>(null);

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>): Promise<void> {
    if (event.target.files) {
      const file = event.target.files[0];
      setRecipe(JSON.parse(await file.text()));
    }
  }

  return (
    <div>
      <input id="file" type="file" onChange={handleFileChange} hidden={recipeData != undefined}/>
      <Recipe {...recipeData}/>
    </div>
  )
};