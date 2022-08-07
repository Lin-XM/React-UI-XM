import React from 'react';
import Layout from './Layout';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Aside from './Aside';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid green;
  height: 500px;
`


const LayoutExample = () => {
  return (
    <Wrapper className='XM-Wrapper' >
      <div>
        <h1>example 1 </h1>
        <Layout className ="Wrapper" style={{height:400}}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>example 2 </h1>
        <Layout className ="Wrapper" style={{height:400}}>
          <Header>header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3 </h1>
        <Layout className ="Wrapper" style={{height:400}}>
          <Aside>Aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </Wrapper>
  );
};
export default LayoutExample;