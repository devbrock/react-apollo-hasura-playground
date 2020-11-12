import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
  user {
    id
    name
  }
}

`;

export const Users = () => {
    const { loading, error, data } = useQuery(GET_USERS,
        // Polling will "refetch" the data every n miliseconds (500 = 0.5s)
        // Keep in mind that the free cloud tear only lets you make 60 requests in a minute.
        // { pollInterval: 5000 }
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <h2>Users:</h2>
            <ul>
                {data.user.map(user => (

                    <li key={user.id}>{user.name}</li>

                ))}
            </ul>
        </>
    );
}

