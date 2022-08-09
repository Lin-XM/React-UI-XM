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
        <h1>example 1： </h1>
        <Layout className ="Wrapper" style={{height:400,width:500}}>
          <Header className='ex-headerAndFooter'>header</Header>
          <Content className='ex-content'>content</Content>
          <Footer className='ex-headerAndFooter'> footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 2 </h1>
        <Layout className ="Wrapper" style={{height:400,width:500}}>
          <Header className='ex-headerAndFooter'>header</Header>
          <Layout>
            <Aside className='ex-aside'>Aside</Aside>
            <Content className='ex-content'>content</Content>
          </Layout>
          <Footer className='ex-headerAndFooter'>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3 </h1>
        <Layout className ="Wrapper" style={{height:400,width:500}}>
          <Aside className='ex-aside'>Aside</Aside>
          <Layout>
            <Header className='ex-headerAndFooter'>header</Header>
            <Content className='ex-content'>content</Content>
            <Footer className='ex-headerAndFooter'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
export default LayoutExample;