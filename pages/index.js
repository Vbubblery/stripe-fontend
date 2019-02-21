import React from 'react'
import gql from "graphql-tag";
// Layout
import Layout from '../components/Layout';

// components
// import SignOrLogin from '../components/signOrLogin';

import {client} from '../lib/apollo';
// <SignOrLogin />

const Index = (props) => (
  <Layout>
    123
  </Layout>
)

client
  .query({
    query: gql`
      query GetLaunch {
        users{
          id
          email
        }
      }
    `
  })
  .then(result => console.log(result));

export default Index;
