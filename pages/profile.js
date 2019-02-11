import React from 'react'

// Layout
import Layout from '../components/Layout';

import dynamic from 'next/dynamic'

// components
// const Qrcode = dynamic(() => import('../components/qrcode'),{ssr: false})
import Qrcode from '../components/qrcode';
const profile = (props) => (
  <Layout>
    <Qrcode />
  </Layout>
)


export default profile;
