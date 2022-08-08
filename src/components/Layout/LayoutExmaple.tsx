import React from 'react';
import Layout from './Layout';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Aside from './Aside';
import './layoutExample.scss'


const LayoutExample = () => {
  return (
    <div className='XM-Wrapper'  >
      <div>
        <h1>example 1 </h1>
        <Layout className ="Wrapper" style={{height:400,width:500}}>
          <Header className='x'>header</Header>
          <Content className='y'>content</Content>
          <Footer className='x'> footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 2 </h1>
        <Layout className ="Wrapper" style={{height:400,width:500}}>
          <Header className='x'>header</Header>
          <Layout>
            <Aside className='z'>Aside</Aside>
            <Content className='y'>content</Content>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3 </h1>
        <Layout className ="Wrapper" style={{height:400,width:500}}>
          <Aside className='z'>Aside</Aside>
          <Layout>
            <Header className='x'>header</Header>
            <Content className='y'>content</Content>
            <Footer className='x'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
export default LayoutExample;