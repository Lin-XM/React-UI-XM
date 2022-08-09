import React from 'react'
import Demo from './demo'
import IconExample from './iconExample';
// eslint-disable-next-line import/no-webpack-loader-syntax
const x= require('!!raw-loader!./iconExample').default


const IconDemo =()=>{
  return (
    <Demo code={x}>
      <IconExample />
    </Demo>
  )
}
export default  IconDemo
