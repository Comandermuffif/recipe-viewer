import Recipe from './Recipe';
import data from '../recipes/lemon-garlic-shrimp.json';

export default function App() {
  return (
    <Recipe {...data}/>
  )
};