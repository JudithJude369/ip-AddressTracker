import arrow from '@/assets/images/icon-arrow.svg';
import { useState } from 'react';

const SearchBar = ({ ipAddress, data, setIpAddress}) => {
  const [isValid, setIsValid] = useState(true);

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

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        <img src={arrow} alt="" />
      </button>
      {/* {!isValid && <p style={{ color: 'red' }}>Invalid IP address</p>} */}
    </form>
  );
};

export default SearchBar;
