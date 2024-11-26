import React from 'react';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContent />
    </QueryClientProvider>
  )
}

function PageContent() {
  const { data } = useQuery({
    queryKey: ['hi'],
    queryFn: async () => {
      const response = await fetch('/hello')
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return responseJson.message;
    },
  })

  return (
    <div>
      <h1>My React App</h1>
      {data && <p>Data from the server: {data}</p>}
    </div>
  );
}

export default App;
