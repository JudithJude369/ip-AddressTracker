import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';
import Details from '@/components/Details';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { useFetch } from '@/hooks/useFetch';
import { useState, useEffect } from 'react';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [userIp, setUserIp] = useState(''); //---added this

  // console.log(data);

  useEffect(() => {
    const fetchUserIp = async () => {
      try {
        const res = await fetch('https://api64.ipify.org?format=json');
        const data = await res.json();
        setUserIp(data.ip);
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Failed to fetch IP address', error);
      }
    };

    fetchUserIp();
  }, []);

  const { data, loading, error } = useFetch(
    ipAddress ? `https://freeipapi.com/api/json/${ipAddress}` : null //edited this to gracefully handle errors
  ); 

  return (
    <main>
      <header className=" container header-wrapper">
        <h1>IP Address Tracker</h1>
        <SearchBar ipAddress={ipAddress} setIpAddress={setIpAddress} />
        {loading && <Loading />}
        {error ? <Error /> : <Details data={data} />}
      </header>
      <Map data={data}/>
    </main>
  );
};

export default App;