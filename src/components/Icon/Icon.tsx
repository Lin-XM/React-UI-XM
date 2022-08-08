import React from 'react';
import styled from 'styled-components';
import classes from '../../helper/classes';

// 引入所有的 SVG 文件
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../../assets/icons/', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
// css 代码
const Wrapper = styled.svg`
    height: 1.4em;
    width:1.4em;
`;


// props 要求 SVG 有元素所有事件类型
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}


// React.FunctionComponent<参数props>，这个props 必须有 name属性
const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, name, ...resetProps} = props;
  return (
    <Wrapper {...resetProps} className={classes('XM-Icon', className)}>
        <use xlinkHref={'#' + name}/>
    </Wrapper>
  );
};

export default Icon;