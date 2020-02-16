import React from 'react';
import Main from './components/UI/Main';
import './styles/variables.scss';
import './App.css';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login'

import { ApolloClient, ApolloProvider } from '@apollo/client';

import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://graphql-test01.herokuapp.com/graphql",
});

const client = new ApolloClient({
  cache,
  link,
  engine: {
    apiKey: "service:qwerty-graph:-0tcB8w1oz_SVmcdB2ti8Q",
    schemaTag: "development"
  }
});

function App() {
  
  return (
    <div className="app">
      <ApolloProvider client={client}>
        {/* <Header /> */}
        <Main />
      </ApolloProvider>
    </div>
  );
}

export default App;
