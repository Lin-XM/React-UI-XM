import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Wrapper = styled.div`
     border:1px solid red;
     display: flex;
`;


const iconExample = () => {
  return (
    <Wrapper>
      <Icon name='settings'/>
    </Wrapper>
  );
};

export default iconExample;
