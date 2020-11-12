import './App.css';
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client';
import { Users } from './components/Users'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hasura + Apollo + React</h1>
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
