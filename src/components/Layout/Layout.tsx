import React, {ReactElement} from 'react';
import './layout.scss'
import classes from '../../helper/classes';
import Aside from './Aside';

// 不知道 Props元素的类型，可以点击存在该类的进去查看
interface Props extends React.HTMLAttributes<HTMLElement>{
  children:ReactElement | Array<ReactElement>       // 限制使用者使用
}


const Layout:React.FunctionComponent<Props> = (props) => {
  const {className,children,...reset} = props
  let hasAside = false
  if((children as Array<ReactElement>).length){
    (children as Array<ReactElement>).map(node=>{
      if(node.type === Aside){
        hasAside = true
      }
    })
  }


  return (
    <div className={classes("XM-Layout",hasAside ? 'hasAside' : '', className)} {...reset}>
      {props.children}
    </div>
  );
};

export default Layout;