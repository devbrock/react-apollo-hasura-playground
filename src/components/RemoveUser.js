import { gql, useMutation } from '@apollo/client';

const DELETE_USER = gql`
mutation deleteUser ($_eq: uuid="") {
  delete_user(where: {id: {_eq: $_eq}}) {
    returning {
      id
      name
    }
  }
}
`

export function RemoveUser() {
    let input;
    const [delete_user, { data }, error] = useMutation(DELETE_USER, { refetchQueries: () => ['Users'] }); //when this mutation runs it will refetch the users query

    if (error) return <p>Error :(</p>;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    delete_user({ variables: { _eq: input.value } });
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                    placeholder="Enter user uuid"
                />
                <button type="submit">Remove User</button>
            </form>
        </div>
    );
}