import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {InputAdornment,Icon,Typography,Link,Divider} from "@material-ui/core";

// @material-ui/icons
import {Email,People} from "@material-ui/icons";

// style
import style from "./style"
// override components
import GridContainer from "../../override_components/Grid/GridContainer";
import GridItem from "../../override_components/Grid/GridItem";
import Card from "../../override_components/Card/Card";
import CardBody from "../../override_components/Card/CardBody";
import CardHeader from "../../override_components/Card/CardHeader";
import CardFooter from "../../override_components/Card/CardFooter";
import Button from "../../override_components/CustomButtons/Button";
import CustomInput from "../../override_components/CustomInput/CustomInput";

import {login} from "../../lib/userAPI";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      email:"",
      password:"",
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
  handleClick = (e) =>{
    const {setLoginState} = this.props;
    setLoginState();
    e.preventDefault();
  }
  handleSubmit = (e) =>{
    const {email,password} = this.state;
    login(email,password);
    e.preventDefault();
  }
  handleChange = (event) =>{
    this.setState({[event.target.id]:event.target.value});
  }
  componentWillUnmount () {}
  render(){
    const { classes,...rest } = this.props;
    return(
      <>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <Typography variant="h6" style={{color:"white"}}>
                        Login
                      </Typography>
                    </CardHeader>
                    <Typography variant="body2" component="p" className={classes.divider}>Or Be Classical</Typography>
                    <CardBody>
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
                        Get started
                      </Button>
                      <Typography>
                        <Link
                          component="button"
                          variant="body2"
                          color="inherit"
                          underline="always"
                          onClick={this.handleClick}
                        >
                            Not Member?
                          </Link>
                      </Typography>
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

Login.propTypes = {

}

export default withStyles(style)(Login);
