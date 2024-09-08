import { Grid2, Typography } from '@mui/material';
import RecipeData from './types.ts';

export default function Recipe(data:RecipeData) {
  return (
    <div>
      <Grid2 container spacing={1}>
        <Grid2 size={12} overflow={'clip'} height={'1in'} hidden={!data.image} sx={{
          backgroundSize: 'cover',
          backgroundImage: `url(${data.image})`,
          backgroundPositionY: 'center',
        }}/>
        <Grid2 size={12}>
          <Typography variant='h3' align='center'>{data.title}</Typography>
        </Grid2>
        <Grid2 size={6}>
          <Typography variant='subtitle1' align='right'>Servings: {data.servings ?? 0}</Typography>
        </Grid2>
        <Grid2 size={6}>
          <Typography variant='subtitle1' align='left'>Duration: {data.duration ?? 0} minutes</Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography variant='h4' align='center'>Ingredients</Typography>
          <ul>
            {data.ingredients?.map((line) => <li>{line}</li>)}
          </ul>
        </Grid2>
        <Grid2 size={8}>
          <Typography variant='h4' align='center'>Directions</Typography>
          <ol>
            {data.instructions?.map((line) => <li>{line}</li>)}
          </ol>
        </Grid2>
        <Grid2 size={12} padding={2} border={1} sx={{ borderStyle: 'dashed' }} hidden={!data.notes}>
          Notes: {data.notes}
        </Grid2>
      </Grid2>
    </div>
  );
};