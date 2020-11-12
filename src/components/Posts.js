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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <>
            <h2>Posts:</h2>
            {
                data.posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}: by {post.user.name}</h3>
                        <p>{post.body}</p>
                    </div>)
                )
            }
        </>
    )
}