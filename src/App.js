import './App.css';
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client';
import { Users } from './components/Users'
import { AddUser } from './components/AddUser'
import { Posts } from './components/Posts'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="App-header">
          <h1>Hasura + Apollo + React</h1>
          <AddUser />
          <Users />
          {/* <Posts /> */}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
