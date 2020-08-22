import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
// react-query fetch with axios
function App() {
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
    axios('http://swapi.dev/api/people/1/')
  );
  return (
    <div className='App'>
      <h1>React Query example with star wars API</h1>
      {error && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Retrieving Luke Skywalker Information ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
export default App;
