import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// images
import spaceXLogo from "./assets/spacex-logo.png";

// Components
import Launches from "./components/launches";
import Launch from "./components/launch";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4300/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img width="300" height="100" src={spaceXLogo} alt="SpaceX logo" />
      </div>
      <Router>
        <Route exact path="/" component={Launches} />
        <Route path="/launch/:flight_num" component={Launch} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
