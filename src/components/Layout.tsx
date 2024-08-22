import { Grid } from '@mui/material'
import NumberViewer from './NumberViewer'

export default function Layout() {
    return <Grid container>
    <Grid item xs={2}/>
    <Grid item xs={8}>
      <NumberViewer/>
    </Grid>
    <Grid item xs={2}/>
  </Grid>
}