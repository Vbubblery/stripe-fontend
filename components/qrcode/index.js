import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// style
import style from "./style"

// components
const QRCode = require('qrcode.react');

// stripe
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../checkoutForm';

class Qrcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null
    };
  }
  componentDidMount() {
    this.setState({
      stripe: window.Stripe("pk_test_wSAh8VTVT4rAkV3ZMhi3Tu9a")
    });
  }
  componentWillUnmount () {}
  render(){
    const { classes, ...rest } = this.props;
    return(
      <>
        <QRCode value="bubble" />

      {/***  <StripeProvider stripe={this.state.stripe}>
        <div>
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>***/}
      </>
    )
  }
}

Qrcode.propTypes = {

}

export default withStyles(style)(Qrcode);
