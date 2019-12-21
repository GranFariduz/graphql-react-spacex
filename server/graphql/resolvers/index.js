const axios = require("axios");

module.exports = {
  launches: async () => {
    try {
      const launches = await axios.get(
        "https://api.spacexdata.com/v3/launches/"
      );
      return launches.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  launch: async ({ flight_number }) => {
    try {
      const launch = await axios.get(
        `https://api.spacexdata.com/v3/launches/${flight_number}`
      );
      return launch.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  rockets: async () => {
    try {
      const rockets = await axios.get(`https://api.spacexdata.com/v3/rockets/`);
      return rockets.data;
    } catch (err) {
      throw new Error(err);
    }
  },

  rocket: async ({ rocket_id }) => {
    try {
      const rocket = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${rocket_id}`
      );
      return rocket.data;
    } catch (err) {
      throw new Error(err);
    }
  }
};
