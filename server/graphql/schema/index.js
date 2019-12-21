const { buildSchema } = require("graphql");

const schema = buildSchema(`

  """ launch_success can be null because there are some upcoming projects which have not been launched """
  
  type Launch {
    flight_number: Int!
    mission_name: String!
    launch_year: String!
    launch_date_local: String!
    launch_success: Boolean
    rocket: Rocket!
  }

  type Rocket {
    rocket_id: String!
    rocket_name: String!
    rocket_type: String!
  }

  type RootQuery {
    launches: [Launch!]!
    launch(flight_number: Int!): Launch
    rockets: [Rocket!]!
    rocket(rocket_id: String!): Rocket
  }

  schema {
    query: RootQuery
  }

`);

module.exports = schema;
