import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';
import Details from '@/components/Details';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { useFetch } from '@/hooks/useFetch';
import { useState } from 'react';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [isValid, setIsValid] = useState(true);

  const { data, loading, error } = useFetch(
    `https://freeipapi.com/api/json/${ipAddress}`
  );
  console.log(data);

  function handleChange(event) {
    setIpAddress(event.target.value());
    setIsValid(true);
  }

  // form setter function
  function handleSubmit(event) {
    event.preventDefault();

    // Regular expression to validate IP address
    const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;

    if (!ipRegex.test(ipAddress)) {
      setIsValid(false);
      return;
    }
  }
  return (
    <main>
      <header className=" container header-wrapper">
        <h1>IP Address Tracker</h1>
        <SearchBar
          ipAddress={ipAddress}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {loading && <Loading />}
        {error ? <Error /> : <Details data={data} ipAddress={ipAddress} />}
      </header>
      <Map data={data} />
    </main>
  );
};

export default App;
