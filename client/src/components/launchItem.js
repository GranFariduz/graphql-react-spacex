import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({ launchDetails }) => {
  const {
    flight_number,
    mission_name,
    launch_success,
    launch_date_local
  } = launchDetails;

  function checkSuccess() {
    return launch_success
      ? "launch-details__misson-name success"
      : "launch-details__misson-name failure";
  }

  return (
    <div className="launch-details">
      <h3 className={checkSuccess()}>[{mission_name}]</h3>
      <h4 className="launch-details__misson-date">
        <Moment format="DD/MM/YYYY HH:mm">{launch_date_local}</Moment>
      </h4>
      <Link to={`/launch/${flight_number}`}>
        <button className="launch-details__button">check details</button>
      </Link>
    </div>
  );
};

export default LaunchItem;
