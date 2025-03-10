import arrow from '@/assets/images/icon-arrow.svg';

const SearchBar = ({ ipAddress, handleChange, handleSubmit }) => {
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
