import React from 'react';
import './layout.scss'
import classes from '../../helper/classes';

// 不知道 Props元素的类型，可以点击存在该类的进去查看
interface Props extends React.HTMLAttributes<HTMLElement>{
}


const Layout:React.FunctionComponent<Props> = (props) => {
  const {className,children,...reset} = props
  return (
    <div className={classes("XM-Layout", className)} {...reset}>
      {props.children}
    </div>
  );
};

export default Layout;