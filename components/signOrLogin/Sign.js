import React from "react";
import Cookies from "js-cookie";
import Router from 'next/router';
import SignForm from "./SignForm";

// graphql client
import { Query,Mutation } from 'react-apollo';
import gql from "graphql-tag";
export const SIGN = gql`
  mutation($email: String!, $password: String!) {
    createNewUser(input: { email: $email, password: $password }) {
      id
      email
      credit
    }
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <>
        <Mutation mutation={SIGN} onCompleted={({createNewUser})=>{
          if(!createNewUser){return null}
          this.props.setLoginState()
        }} >
          {(createNewUser,{loading,error}) => {
            return (<SignForm createNewUser={createNewUser}/>)
          }}
        </Mutation>
      </>
    )
  }
}

Login.propTypes = {

}

export default Login;
