import React from "react";
import Router from "next/router";

import Cookies from "js-cookie";


export default Page =>
  class DefaultPage extends React.Component {
    static async getInitialProps({ req }) {
      const loggedUser = Cookies.get("token")
      const pageProps = Page.getInitialProps && Page.getInitialProps(req);
      console.log("is authenticated");
      console.log(loggedUser);
      let path = req ? req.pathname : "";
      path = "";
      return {
        ...pageProps,
        loggedUser,
        currentUrl: path,
        isAuthenticated: !!loggedUser
      };
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
      return <Page {...this.props} />;
    }
  };
