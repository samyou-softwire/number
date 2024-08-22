import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './components/Layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout/>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
