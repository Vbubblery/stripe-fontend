import React from "react";
import Router from 'next/router'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {InputAdornment,Icon,Typography,Link} from "@material-ui/core";

// override components
import GridContainer from "../../override_components/Grid/GridContainer";
import GridItem from "../../override_components/Grid/GridItem";
import Card from "../../override_components/Card/Card";
import CardBody from "../../override_components/Card/CardBody";
import CardHeader from "../../override_components/Card/CardHeader";
import CardFooter from "../../override_components/Card/CardFooter";
import Button from "../../override_components/CustomButtons/Button";
import CustomInput from "../../override_components/CustomInput/CustomInput";

import {Email,People} from "@material-ui/icons";

import {addUser} from "../../lib/userAPI";
// style
import style from "./style"

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      username:"",
      password:"",
      email:"",
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      100
    );
  }
  signSubmit = (username,mail,password) =>{
    addUser(username,mail,password).then(()=>{Router.push('/users')})
  }
  handleSubmit = (e) =>{
    const {username,password,email} = this.state;
    this.signSubmit(username,email,password);
    e.preventDefault();
  }
  handleChange = (event) =>{
    this.setState({[event.target.id]:event.target.value});
  }
  componentWillUnmount () {}
  render(){
    const { classes, ...rest } = this.props;
    return(
      <>
        <div className={classes.container} onSubmit={this.handleSubmit} >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange:this.handleChange,
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange:this.handleChange,
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange:this.handleChange,
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple type="submit" color="primary" size="lg">
                      Create
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </>
    )
  }
}

Sign.propTypes = {

}

export default withStyles(style)(Sign);
