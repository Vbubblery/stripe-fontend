import gql from "graphql-tag";

export const GET_USERS = gql`
  query getUsers{
    me{
      id
      email
      password
      credit
    }
  }
`;
// <Query query={LOGIN} variables={{"email": "zhoujuncheng0116@gmail.com","password": "dx13658444998"}}>
export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password)
  }
`;
