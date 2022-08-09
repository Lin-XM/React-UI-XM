import React from 'react'
import Demo from './demo'
import DialogExample from './dialogExample';
// eslint-disable-next-line import/no-webpack-loader-syntax
const x= require('!!raw-loader!./dialogExample').default


const DialogDemo =()=>{
  return (
    <Demo code={x}>
      <DialogExample />
    </Demo>
  )
}
export default  DialogDemo