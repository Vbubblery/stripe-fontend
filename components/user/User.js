import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { withRouter } from "next/router";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from '@material-ui/core';
// style
import style from "./style";

import {getUserById} from "../../lib/userAPI";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null
    }
  }
  componentDidMount() {
    getUserById(this.props.router.query.id).then(i=>{
      this.setState({data:i})
    })
  }
  componentWillUnmount () {}
  render(){
    const { classes,...rest } = this.props;
    return(
      <>
        {!this.state.data?(`loading...`):(<Typography>{this.state.data.username}</Typography>)}
      </>
    )
  }
}

User.propTypes = {}
// const query = gql`
//   query($id:ID!){
//       client(id:$id) {
//         _id
//         name
//         mail
//       }
//   }
// `;
// export default compose(withRouter,withStyles(style),graphql(query,{options:props => {return {variables:{id:props.router.query.id}}},props:({data})=>({data})}))(User)
export default compose(withRouter,withStyles(style))(User)
