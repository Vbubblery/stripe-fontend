import React from "react";
import Router from "next/router";


export default Page =>
  class DefaultPage extends React.Component {
    static async getInitialProps({ req }) {
      const cookie = req.headers.cookie.split(";")
      .find(c => c.trim().startsWith("token="));
      let user = ""
      if (!!cookie) {
        user = cookie.split("=")[1]
      }
      const loggedUser = user
      const pageProps = Page.getInitialProps && Page.getInitialProps(req);
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
