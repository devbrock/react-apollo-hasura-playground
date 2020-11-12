import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query MyQuery {
  posts {
    body
    id
    title
    user {
      name
    }
  }
}
`;

export const Posts = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    console.log('data', data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return data.posts.map(({ id, body, title, user }) => (
        <div key={id}>
            <h2>
                {title}
            </h2>
            <p>{body}</p>
            <h4>Written by: {user.name}</h4>
        </div>
    ));
}

