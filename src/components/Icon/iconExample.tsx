import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
     border:1px solid red;
     display: flex;
     flex-direction: column;
`;


const IconExmaple = () => {
  return (
    <Wrapper>
      <header>
        <div>
          <h2>下面展示的是一个 icon 组件的例子</h2>
        </div>
      </header>
      <main>
        <div>
          <span>这个组件有一个必须的参数【name】就是 svg 的名字.</span>
          <span>也支持点击、鼠标、悬浮等各种事件，默认高宽 [1.4em]。</span>
          <Icon name='settings' />
        </div>
      </main>

    </Wrapper>
  );
};

export default IconExmaple;
