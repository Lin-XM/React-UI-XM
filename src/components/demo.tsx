import React, {useState} from 'react';
import Highlight,{defaultProps} from 'prism-react-renderer'
import Icon from './Icon/Icon';

interface Props {
  code: string
}

const Demo:React.FunctionComponent<Props> =  (props)=>{
  const [visible,setVisible] = useState(false)
  const code = (
    <Highlight {...defaultProps} language='jsx' code={props.code} >
      {({className,style,tokens,getLineProps,getTokenProps})=>(
        <pre className={className} style={style} >
            {tokens.map((line,i)=>(
              <div {...getLineProps({line,key:i})} >
                {line.map((token,key) =>(
                  <span {...getTokenProps({token,key})} />
                ))}
              </div>
            ))}
          </pre>
      )}
    </Highlight>
  )
  return (
    <div className='example'>
      <div>
          <span>这个组件有一个必须的参数【name】就是 svg 的名字.</span>
          <span>也支持点击、鼠标、悬浮等各种事件，默认高宽 [1.4em]。</span>
      </div>

      <div className="iconCode">
        <div className='ex-icon'>
          <Icon name='settings' />
          <Icon name='close' />
          <Icon name='loading' />
          <Icon name='thumbs-up' />
          <Icon name='download' />
        </div>

        <div className="buttonCode" onClick={()=>{setVisible(!visible)}}>展示代码</div>


      </div>
      <div className="codeDiv">
        {visible && code}
      </div>
    </div>
  )
}

export default  Demo