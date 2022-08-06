import React, {useState} from 'react';
import Dialog from './Dialog';

function DialogExample (){
  const [x,setX] = useState(false);
  return (
    <div >
      <div>
        <h2>dialog 用例演示</h2>
        <span>使用该组件必须传递的参数: visible,buttons, 点击按钮触发关闭事件：onClose；
          以及点击弹窗外是否关闭弹窗【默认 false】 closeOnClickMask。 </span>
        <span>z-index 用户自行决定</span>
      </div>

      <button onClick={()=>setX(!x)} > 点我</button>
      <Dialog visible={x} closeOnClickMask={true} buttons={
        [
          <button onClick={()=>{setX(false)}}>取消</button>,
          <button onClick={()=>{setX(false)}}>确定</button>
        ]} onClose={()=>{setX(false)}} >
        <div>hi</div>
      </Dialog>
    </div>
  );
}

export default DialogExample;
