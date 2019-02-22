// import { HttpLink } from "apollo-link-http";
// import { withData } from "next-apollo";
//
// const config = {
//   link: new HttpLink({
//     uri: "https://stripe-backend-bubble.herokuapp.com/graphql", // Server URL (must be absolute)
//   })
// };
// export default withData(config);
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookies from "js-cookie";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new createHttpLink({
  fetch:fetch,
  uri: 'https://stripe-apollo-jiayzzqycg.now.sh',
  headers: {
    authorization: Cookies.get('token'),
  },
})
export const client = new ApolloClient({
  cache,
  link,
})
