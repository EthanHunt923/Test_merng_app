// provide Apollo client to application so that we can connect to graphql server

import React from "react";
import App from "./App";
import {
  InMemoryCache,
  ApolloClient,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
