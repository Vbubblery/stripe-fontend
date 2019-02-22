import React from 'react'
// Layout
import Layout from '../components/Layout';

// components
import SignOrLogin from '../components/signOrLogin';

// import { Query } from 'react-apollo';
// <Query query={GET_USERS} variables={{}} context={{"headers":{"authorization": "emhvdWp1bmNoZW5nMDExNkBnbWFpbC5jb20="}}}>
//   {(data)=>{console.log(data);return <p>123</p>}}
// </Query>


const Index = (props) => (
  <Layout>
    <SignOrLogin />
  </Layout>
)

export default Index;
