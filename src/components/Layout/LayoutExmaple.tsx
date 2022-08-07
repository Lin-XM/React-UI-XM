import React from 'react';
import Layout from './Layout';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const LayoutExample = () => {
  return (
    <div className='XM-Wrapper' style={{height:200}}>
      <div>
        <h1>example 1 </h1>
        <Layout className ="Wrapper" >
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>

      </div>
    </div>
  );
};
export default LayoutExample;