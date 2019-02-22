import React from "react";
import Cookies from "js-cookie";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// style
import style from "./style"

// components
const QRCode = require('qrcode.react');

import { Query,Mutation } from 'react-apollo';
import gql from "graphql-tag";
export const ME = gql`
  query {
    me{
      email
      credit
    }
  }
`;

// stripe
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkoutForm';

class Qrcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      data:"loading..."
    };
  }
  componentDidMount() {
    this.setState({
      stripe: window.Stripe("pk_test_wSAh8VTVT4rAkV3ZMhi3Tu9a"),
      data:Cookies.get("token")
    });
  }
  componentWillUnmount () {
  }
  render(){
    const { classes, ...rest } = this.props;
    return(
      <>
        <QRCode value={this.state.data} size={256}/>

        <StripeProvider stripe={this.state.stripe}>
                  <div>
                    <h1>React Stripe Elements</h1>
                    <Elements>
                      <CheckoutForm email={this.state.data}/>
                    </Elements>
                  </div>
        </StripeProvider>
      </>
    )
  }
}

Qrcode.propTypes = {
}

export default withStyles(style)(Qrcode);
