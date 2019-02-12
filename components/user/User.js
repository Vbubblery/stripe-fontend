import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { withRouter } from "next/router";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {List,ListItem,ListItemText,Divider} from '@material-ui/core';
// style
import style from "./style";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount () {}
  render(){
    const { classes,data,...rest } = this.props;
    return(
      <>
        {data.loading?(`loading...`):(<p>{data.client.name}</p>)}
      </>
    )
  }
}

User.propTypes = {}
const query = gql`
  query($id:ID!){
      client(id:$id) {
        _id
        name
        mail
      }
  }

`;
export default compose(withRouter,withStyles(style),graphql(query,{options:props => {return {variables:{id:props.router.query.id}}},props:({data})=>({data})}))(User)
