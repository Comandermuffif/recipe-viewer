import { Grid2, Typography } from '@mui/material';
import RecipeData from './types.ts';
import './Recipe.css';

export default function Recipe(data:RecipeData) {
  return (
    <div>
      <Grid2 container spacing={1}>
        <Grid2 size={12} className='image' hidden={!data.image} sx={{
          backgroundImage: `url(${data.image})`,
        }}/>
        <Grid2 size={12}>
          <Typography variant='h3' align='center' >{data.title ?? 'Unknown'}</Typography>
        </Grid2>
        <Grid2 size={6}>
          <Typography variant='subtitle1' align='right'>Servings: {data.servings ?? 'Unknown'}</Typography>
        </Grid2>
        <Grid2 size={6}>
          <Typography variant='subtitle1' align='left'>Duration: {data.duration ?? 'Unknown'}</Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant='h4' align='center'>Ingredients</Typography>
          <ul className='ingredients'>
            {(data.ingredients ?? ['Unknown']).map((line) => <li key={line}>{line}</li>)}
          </ul>
        </Grid2>
        <Grid2 size={8}>
          <Typography variant='h4' align='center'>Directions</Typography>
          <ol>
            {(data.instructions ?? ['Unknown']).map((line) => <li>{line}</li>)}
          </ol>
        </Grid2>
        <Grid2 size={12} className='notes' hidden={!data.notes}>
          Notes:
          <ul>
            {data.notes?.map((line) => <li>{line}</li>)}
          </ul>
        </Grid2>
      </Grid2>
    </div>
  );
};