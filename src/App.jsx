import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';
import Details from '@/components/Details';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { useFetch } from '@/hooks/useFetch';
import { useState } from 'react';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');


  const { data, loading, error } = useFetch(
    `https://freeipapi.com/api/json/${ipAddress}`
  );
  console.log(data);
  }
  return (
    <main>
      <header className=" container header-wrapper">
        <h1>IP Address Tracker</h1>
        <SearchBar
          ipAddress={ipAddress}
          data={data}
          setIpAddress={setIpAddress}
        />
        {loading && <Loading />}
        {error ? <Error /> : <Details data={data} ipAddress={ipAddress} />}
      </header>
      <Map data={data} />
    </main>
  );
};

export default App;
