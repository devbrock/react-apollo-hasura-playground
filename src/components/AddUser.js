import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
 mutation addUser($name: String!) {
  insert_user(objects: {name: $name}) {
    returning {
      id
      name
    }
  }
}
`;

export function AddUser() {
    let input;
    const [insert_user, { data }] = useMutation(ADD_USER, { refetchQueries: () => ['Users'] }); //when this mutation runs it will refetch the users query

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    insert_user({ variables: { name: input.value } });
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}