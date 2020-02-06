import React from 'react';
import Main from './components/UI/Main';
import './styles/variables.scss';
import './App.css';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login'

import ApolloClient, {
  gql,
} from "apollo-boost";
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {
  graphql,
  ApolloProvider,
} from 'react-apollo';

// const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://graphql-test01.herokuapp.com/",
  engine: {
    apiKey: "service:qwerty-graph:-0tcB8w1oz_SVmcdB2ti8Q",
    schemaTag: "development"
  }
});


function App() {
  
  return (
    <div className="app">
      {/* <Header /> */}
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </div>
  );
}

export default App;
