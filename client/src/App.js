import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import NavigatonBar from './components/navigation';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={ client }>
    <BrowserRouter>
      <NavigatonBar />
      <Switch>
        <Route exact path='/' component={ About } />
        <Route path='/portfolio' component={ Portfolio } />
        <Route path='/contact' component={ Contact } />
      </Switch>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
