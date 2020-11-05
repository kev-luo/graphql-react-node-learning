import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import Portfolio from './components/portfolio';
import AddProject from './components/addProject';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={ client }>
    <div id="main">
      <h1>Kevin Luo Portfolio</h1>
      <Portfolio />
      <AddProject />
    </div>
    </ApolloProvider>
  );
}

export default App;
