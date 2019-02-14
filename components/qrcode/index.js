import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// style
import style from "./style"

// components
const QRCode = require('qrcode.react');

import {getIdInCookies,getUserById} from "../../lib/userAPI";

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
      stripe: window.Stripe("pk_test_wSAh8VTVT4rAkV3ZMhi3Tu9a")
    });
    getUserById(getIdInCookies()).then(i=>{
      this.setState({data:JSON.stringify(i)})
    })
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
            <CheckoutForm />
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
