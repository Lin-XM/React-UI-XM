import React from 'react';
import Icon from './Icon';

const IconExample = () => {
  return (
    <div>
      <div>
        <span>这个组件有一个必须的参数【name】就是 svg 的名字.</span>
        <span>也支持点击、鼠标、悬浮等各种事件，默认高宽 [1.4em]。</span>
      </div>
      <div className='ex-icon'>
        <Icon name='settings' />
        <Icon name='close' />
        <Icon name='loading' />
        <Icon name='thumbs-up' />

      </div>
    </div>
  );
};

export default IconExample;
