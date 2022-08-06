import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from '../Icon/Icon';


interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean        //点击提示框外部 是否关闭
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickCLose: React.MouseEventHandler = (event) => {
    props.onClose(event);
  };
  const onClickMask: React.MouseEventHandler = (event) => {
    if (props.closeOnClickMask) {
      props.onClose(event);
    }
  };

  const x = props.visible ?
    <Fragment>
      <div className='XM-Dialog-Mask' onClick={onClickMask}>
      </div>
      <div className='XM-Dialog'>
        <div>
          <header className='XM-Dialog-Header'>提示</header>
          <div className="XM-close" onClick={onClickCLose}>
            <Icon name='close'/>
          </div>
        </div>

        <main className="XM-Dialog-Main">
          {props.children}
        </main>
        <footer className="XM-Dialog-Footer">
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
      </div>
    </Fragment>

    : null;

  return (
    ReactDOM.createPortal(x, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

// 实现用户可以直接使用 alert 就出现弹窗
const alert = (content: string) => {
  const Close = ()=>{
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component = <Dialog
    visible={true}
    onClose={Close}
    buttons={[<button onClick={Close}>OK</button>]}
  >
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

// 使用用户可以直接使用 confirm 直接弹出 有两个按钮的弹窗
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes()
  };
  const onNO = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no()
  };

  const component = <Dialog visible={true} onClose={() => { onNO()}}
    buttons={[
      <button onClick={onYes}>Yes</button>,
      <button onClick={onNO}>NO</button>
    ]}>
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

// 使用用户可以直接使用 modal 直接弹出 有两个按钮的弹窗

const modal =(content:ReactNode | ReactFragment)=>{
  const Close = ()=>{
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component = <Dialog visible={true} onClose={Close}>
    {content}
  </Dialog>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component,div)
  return Close;
}

export default Dialog;
export {alert, confirm,modal};