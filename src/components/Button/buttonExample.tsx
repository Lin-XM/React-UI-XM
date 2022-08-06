import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
     border:1px solid green;
`;


const ButtonExample = () => {
  return (
    <Wrapper>
      <Button/>
    </Wrapper>
  );
};

export default ButtonExample;
