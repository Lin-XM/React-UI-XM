import React from 'react';
import classes from '../../helper/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{
}


const Footer:React.FunctionComponent<Props> = (props) => {
  const {className,children,...reset} = props
  return (
    <div className={classes('XM-Layout-Footer',className)} {...reset}>
      layout-footer
    </div>
  );
};

export default Footer;