import React from 'react';
import styled from 'styled-components'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons/', true, /\.svg$/));} catch (error) {console.log(error);}

const Wrapper = styled.div`
 > svg{
  height: 1.4em;
  width:1.4em;
  display: inline-block;
 }
`



interface IconProps {
  name: string;
  onClick:React.MouseEventHandler<SVGElement>       // 可以根据提示写出 onclick 的类型
  // onClick:()=> void            // 也可以这样写, 但是返回值 可能会出现错误
}



// React.FunctionComponent<参数props>，这个props 必须有 name属性
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Wrapper>
        <svg onClick={props.onClick}>
          <use xlinkHref={'#' + props.name}/>
        </svg>
    </Wrapper>
  );
};

export default Icon;