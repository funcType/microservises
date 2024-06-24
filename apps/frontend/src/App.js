import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import Users from './Users';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>GraphQL Users</h1>
        </header>
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;