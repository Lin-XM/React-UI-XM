import React, {Fragment} from 'react';
import './dialog.scss'
import Icon from '../Icon/Icon';


interface Props {
  visible: boolean;
}


const Dialog: React.FunctionComponent<Props> = (props) => {

  return (
    props.visible ?
      <Fragment>
        <div className='XM-Dialog-Mask'>
        </div>
        <div className='XM-Dialog'>
          <div>
            <header className='XM-Dialog-Header'>提示</header>
            <div className="XM-close">
              <Icon name='close' />
            </div>
          </div>

          <main className="XM-Dialog-Main">
            {props.children}
          </main>
          <footer className="XM-Dialog-Footer">
            <button>取消</button>
            <button>确认</button>
          </footer>
        </div>
      </Fragment>

      : null
  );
};
export default Dialog;