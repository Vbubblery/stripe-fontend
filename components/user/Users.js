import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "recompose";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {List,ListItem,ListItemText,Divider} from '@material-ui/core';
// style
import style from "./style";

import {getUsers} from "../../lib/userAPI";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:null
    }
  }
  componentDidMount() {
    getUsers().then(i=>{
      this.setState({data:i})
    })
  }
  componentWillUnmount () {}
  render(){
    const { classes,...rest } = this.props;
    console.log(this.state)
    return(
      <>
        <List className={classes.root}>
          {!this.state.data?(null):(this.state.data.map(user=>(<ListItem key={user._id}><ListItemText primary={user.username} secondary={user.email}/></ListItem>)))}
        </List>
      </>
    )
  }
}

Users.propTypes = {}
// const query = gql`
//   {
//     clients {
//       _id
//       name
//       mail
//     }
//   }
// `;
// export default compose(withStyles(style),graphql(query,{props:({data})=>({data})}))(Users)
export default compose(withStyles(style))(Users)
