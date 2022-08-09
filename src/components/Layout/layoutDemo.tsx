import React from 'react'
import Demo from './demo'
import LayoutExample from './LayoutExample';
// eslint-disable-next-line import/no-webpack-loader-syntax
const x= require('!!raw-loader!./LayoutExample').default


const layoutDemo =()=>{
  return (
    <Demo code={x}>
      <LayoutExample />
    </Demo>
  )
}
export default  layoutDemo
