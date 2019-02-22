import React, {Component} from 'react';
import axios from 'axios';
import {CardElement, injectStripe} from 'react-stripe-elements';

class Check extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {complete: false};
  }

  submit = async(ev) =>{
    const {token} = await this.props.stripe.createToken({name: this.props.email});
    let response = await axios({
      method: "POST",
      headers: {"content-type": "application/json;charset=UTF-8"},
      data: JSON.stringify(token),
      url:"/stripe/charge"
    });
    // if (response.ok) this.setState({complete: true});
    if(response.data.status==="succeeded") {
      this.setState({complete: true});
      this.props.post({ variables: {number:200}})
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
          <div className="checkout">
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={this.submit}>Send</button>
          </div>
    );
  }
}

export default injectStripe(Check);
