import React, {Component} from 'react';

import { Query,Mutation } from 'react-apollo';
import gql from "graphql-tag";

import Check from "./Check";

export const INCREASECREDIT = gql`
  mutation iCredit($number:Float){
    increaseCredit(number:$number)
  }
`;


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Mutation mutation={INCREASECREDIT}>
      {(increaseCredit,{loading,error})=>{
        if(loading) return (<p>loading</p>)
        return(<Check post={increaseCredit} />)
      }}
      </Mutation>
    );
  }
}

export default CheckoutForm;
