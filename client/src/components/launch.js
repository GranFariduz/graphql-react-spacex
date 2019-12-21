import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query getLaunch($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      launch_year
      mission_name
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = ({ match }) => {
  let { flight_num } = match.params;
  flight_num = parseInt(flight_num);
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: flight_num }
  });
  if (loading) return <h2 className="loader">smoking weed with elon...</h2>;
  if (error) return `${error}`;

  const {
    flight_number,
    launch_year,
    mission_name,
    launch_success,
    lanuch_date_local,
    rocket
  } = data.launch;

  return (
    <div className="launch-detail">
      <h2>
        Misson: <span>{mission_name}</span>
      </h2>
      <div className="launch-detail__info">
        <h3>Launch Details</h3>
        <ul>
          <li>Flight Number: {flight_number}</li>
          <li>Launch Year: {launch_year}</li>
          <li>
            Launch Outcome: {launch_success ? "Successful" : "Unsuccessful"}
          </li>
          <li>
            Launch Date:{" "}
            <Moment format="DD/MM/YYYY HH:mm">{lanuch_date_local}</Moment>
            {" hours"}
          </li>
        </ul>
      </div>
      <div className="launch-detail__rocket">
        <h3>Rocket Details</h3>
        <ul>
          <li>Rocket ID: {rocket.rocket_id}</li>
          <li>Rocket Name: {rocket.rocket_name}</li>
          <li>Rocket Type: {rocket.rocket_type}</li>
        </ul>
      </div>
      <Link to="/">
        <button className="back-button">Go back</button>
      </Link>
    </div>
  );
};

export default Launch;
