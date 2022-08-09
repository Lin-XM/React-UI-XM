import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import Dialog, {alert, confirm, modal} from './Dialog';

interface Props {
  code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(false);
  const openModal = () => {
    const close = modal(
      <h3> 测试内容
        <button onClick={() => close()}>close</button>
      </h3>);
  };

  const code = (
    <Highlight {...defaultProps} language='jsx' code={props.code}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({line, key: i})} >
                {line.map((token, key) => (
                  <span {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
      )}
    </Highlight>
  );
  return (
    <div className='example'>
      <div>
        <h2>dialog 用例演示</h2>
        <span>使用该组件必须传递的参数: visible,buttons, 点击按钮触发关闭事件：onClose；
          以及点击弹窗外是否关闭弹窗【默认 false】 closeOnClickMask。 </span>
        <span>z-index 用户自行决定</span>
      </div>

      <div className="XM-Code">
        <div className='exampleCode2'>
          <div>
            <span>example1：普通弹窗，点击弹出确定与取消按钮。
              <button className="buttonCode" onClick={() => setX(!x)}>普通弹窗</button>
            </span>
            <Dialog visible={x} closeOnClickMask={true} buttons={
              [
                <button onClick={() => {setX(false);}}>取消</button>,
                <button onClick={() => {setX(false);}}>确定</button>
              ]} onClose={() => {setX(false);}}>
              <div>hi</div>
            </Dialog>
          </div>
          <div>
            <span>
              example 2：使用 alert 直接出现一个弹窗
              <button className="buttonCode" onClick={() => alert('这是一个测试内容')}>alert</button>
            </span>
          </div>
          <div>
            <span>example 3：confirm 弹窗
                   <button className="buttonCode" onClick={() => confirm('这是一个测试内容', () => {console.log('点击了yes');},
                     () => {console.log('点击了no');})}>
                    confirm
                  </button>
            </span>

          </div>
          <div>
            <span>example 4：modal 弹窗
              <button className="buttonCode" onClick={openModal}>
              modal
              </button>
            </span>


          </div>

        </div>

        <div className="onclickCode" onClick={() => {setVisible(!visible);}}>展示代码</div>

      </div>
      <div className="codeDiv">
        {visible && code}
      </div>
    </div>
  );
};

export default Demo;