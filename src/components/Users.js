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
    console.log('data', data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return data.user.map(({ id, name }) => (
        <div key={id}>
            <p>
                {id}: {name}
            </p>
        </div>
    ));
}

