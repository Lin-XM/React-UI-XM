import React from 'react';
import classes from '../../helper/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Content:React.FunctionComponent<Props> = (props) => {
  const {className, children, ...reset} = props

  return (
    <div className={classes('XM-Layout-Content', className)} {...reset} >
      {props.children}

    </div>
  );
};

export default Content;