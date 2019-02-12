import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// components
import Login from "./Login.js";
import Sign from "./Sign.js";

// image
import image from "../../lib/imgs/sign.jpg";

// style
import style from "./style";

class SignOrLogin extends React.Component {
  state = {
    login:true
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillUnmount () {}
  setLoginState = () =>{
    this.setState({
      login:!this.state.login
    })
  }
  render(){
    const { classes,...rest } = this.props;
    const { login } = this.state;
    return(
      <>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
          }}
        >
          {login?
            (<Login setLoginState={this.setLoginState}/>):(<Sign />)
          }
        </div>
      </>
    )
  }
}

SignOrLogin.propTypes = {}
const query = gql`
  {
    clients {
      _id
      name
      mail
    }
  }
`;
export default withStyles(style)(graphql(query,{props:({data})=>({data})})(SignOrLogin));
