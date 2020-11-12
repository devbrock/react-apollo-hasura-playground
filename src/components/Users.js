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
    const { loading, error, data } = useQuery(GET_USERS);
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

