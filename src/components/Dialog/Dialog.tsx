import React, {Fragment, ReactElement , ReactNode} from 'react';
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


const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = <Dialog
    visible={true}
    onClose={onClose}
    buttons={buttons}
  >
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};


// 实现用户可以直接使用 alert 就出现弹窗
const alert = (content: string) => {
  const button = <button onClick={() => onClose()}>OK</button>;
  const onClose = modal(content, [button]);
};

// 使用用户可以直接使用 confirm 直接弹出 有两个按钮的弹窗
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    onClose();
    yes && yes();
  };
  const onNO = () => {
    onClose();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>Yes</button>,
    <button onClick={onNO}>NO</button>
  ];
  const onClose = modal(content, buttons);
};

// 使用用户可以直接使用 modal 直接弹出 有两个按钮的弹窗

export default Dialog;
export {alert, confirm, modal};