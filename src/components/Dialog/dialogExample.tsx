import React, {useState} from 'react';
import styled from 'styled-components';
import Dialog from './Dialog';

const Wrapper = styled.div`
     border:1px solid black;
`;


const iconExample = () => {
  return (
    <Wrapper>
      <button > 点我</button>
      <Dialog visible={true} >
        <div>hi</div>
      </Dialog>
    </Wrapper>
  );
};

export default iconExample;
