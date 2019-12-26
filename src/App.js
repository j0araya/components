import React from 'react';
import Main from './components/UI/Main';
import './styles/variables.scss';
import './App.css';
import ApolloClient, {
  gql,
} from "apollo-boost";
import {
  graphql,
  ApolloProvider,
} from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
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
