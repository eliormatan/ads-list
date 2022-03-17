import React from 'react';
import Search from './Search';
import Table from './Table';
import Spinner from './Spinner';
import Error from './Error';
import fetchData from '../api/fetchData';

function App() {

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleChange = React.useCallback((event) => {
    event.preventDefault();
    setSearch(event.target.value);
  });

  const handleSubmit = React.useCallback(async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError('');

    try {
      const data = await fetchData(search);
      data ? setData(data.advertisers) : setData([]);
    }
    catch (err) {
      setData([]);
      setError("Failed to parse from this domain");
    }
    setIsLoading(false);
  });

  return (
    <div className="container">
      <h1>Advertisers List</h1>
      <Search search={search} onChange={handleChange} onSubmit={handleSubmit} />
      {error ? <Error error={error} /> : null}
      {isLoading ? <Spinner /> : null}
      {!isLoading && data && data.length > 0 ? <Table advertisers={data} /> : null}
    </div>
  );
}

export default App;
