import React from 'react';
import classes from '../../helper/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{
}


const Aside:React.FunctionComponent<Props> = (props) => {
  const {className,children, ...reset} = props
  return (
    <div className={classes('XM-Layout-Aside', className)} {...reset}>
      layout-aside
    </div>
  );
};

export default Aside;