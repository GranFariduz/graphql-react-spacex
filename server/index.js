const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();

const PORT = process.env.PORT || 4300;

app.use(express.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: resolvers
  })
);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
