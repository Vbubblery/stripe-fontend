import React from "react";
import Cookies from "js-cookie";
import Router from 'next/router';
import LoginForm from "./LoginForm";

// graphql client
import { Query,Mutation } from 'react-apollo';
import gql from "graphql-tag";
export const LOGIN = gql`
  mutation login2($email: String, $password: String) {
    login(email: $email, password: $password)
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <>
        <Mutation mutation={LOGIN} onCompleted={async({login})=>{
          if(!login){return null}
          Cookies.set("token", login);
          if (Cookies.get("token")) {
            // Router.push("/profile");
          }
        }} >
          {(login,{loading,error}) => {
            return (<LoginForm setLoginState={this.props.setLoginState} login={login}/>)
          }}
        </Mutation>
      </>
    )
  }
}

Login.propTypes = {

}

export default Login;
