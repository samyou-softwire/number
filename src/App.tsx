import { Grid } from '@mui/material'
import './App.css'
import NumberViewer from './components/NumberViewer/NumberViewer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container>
        <Grid item xs={2}/>
        <Grid item xs={8}>
          <NumberViewer/>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
    </QueryClientProvider>
  )
}

export default App
