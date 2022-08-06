import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom'
import './dialog.scss';
import Icon from '../Icon/Icon';


interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?:boolean        //点击提示框外部 是否关闭
}


const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickCLose: React.MouseEventHandler = (event) => {
    props.onClose(event);
  };
  const onClickMask:React.MouseEventHandler =(event)=> {
    if(props.closeOnClickMask){
      props.onClose(event)
    }
  }

  const x =  props.visible ?
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
          { props.buttons &&  props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
      </div>
    </Fragment>

    : null;

  return (
   ReactDOM.createPortal(x,document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask:false
};

// 实现用户可以直接使用 alert 就出现弹窗
const alert=(content:string)=>{
  const component = <Dialog visible={true}  onClose={()=>{
    ReactDOM.render(React.cloneElement(component, {visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }} >
    {content}
  </Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component,div);
};
export default Dialog;
export {alert}