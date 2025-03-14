const Details = ({ data }) => {
  return (
    <div className="details-container">
      <p className="details-wrapper">
        IP ADDRESS<span>{data.ipAddress}</span>
      </p>
      <p className="details-wrapper">
        LOCATION<span>{data.cityName}</span>
      </p>
      <p className="details-wrapper">
        TIMEZONE<span>{data.timeZone}</span>
      </p>
      <p>
        COUNTRY<span>{data.countryName}</span>
      </p>
    </div>
  );
};

export default Details;
