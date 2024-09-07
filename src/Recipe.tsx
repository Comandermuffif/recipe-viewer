import RecipeData from './types.ts';

export default function Recipe(data:RecipeData) {
  return (<div>
    <h1>{data.title}</h1>
    <span>Servings: {data.servings}</span>
    <br/>
    <span>Duration: {data.duration} minutes</span>
    <h2>Ingredients</h2>
    <ul>
      {data.ingredients?.map((line) => <li>{line}</li>)}
    </ul>
    <h2>Directions</h2>
    <ol>
      {data.instructions?.map((line) => <li>{line}</li>)}
    </ol>
  </div>);
};