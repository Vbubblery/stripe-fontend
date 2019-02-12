import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose } from "recompose";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {List,ListItem,ListItemText,Divider} from '@material-ui/core';
// style
import style from "./style";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount () {}
  render(){
    const { classes,data,...rest } = this.props;
    // const clients = data.clients.map(client=>{
    //   return (
    //     <ListItem key={client._id}>
    //       <ListItemText primary={client.name}/>
    //     </ListItem>
    //   )
    // })
    console.log(data)
    var test = null
    if(!data.loading) test = data.clients.map(i=>(<p key={i['_id']}>{i['_id']}</p>))
    return(
      <>
        <List className={classes.root}>
          {data.loading?(null):(data.clients.map(client=>(<ListItem key={client._id}><ListItemText primary={client.name} secondary={client.mail}/></ListItem>)))}
        </List>
      </>
    )
  }
}

Users.propTypes = {}
const query = gql`
  {
    clients {
      _id
      name
      mail
    }
  }
`;
export default compose(withStyles(style),graphql(query,{props:({data})=>({data})}))(Users)
