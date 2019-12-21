import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// components
import LaunchItem from "./launchItem";

const LAUNCHES_QUERY = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <p className="loader">talking to elon musk...</p>;
  if (error) return `${error}`;
  return (
    <div className="launches-container">
      {data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launchDetails={launch} />
      ))}
    </div>
  );
};

export default Launches;
