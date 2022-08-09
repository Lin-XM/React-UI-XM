import React, {useState} from 'react';
import Highlight,{defaultProps} from 'prism-react-renderer'
import Layout from './Layout';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Aside from './Aside';
import './layoutExample.scss'

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
        <span>这个组件由四个小组件构成，分别是[Header], [Aside], [Content], [Footer] 构建而成.</span>
        <span>有三种不同的类型，如下图所示：</span>
      </div>

      <div className="XM-Code">
        <div className='exampleCode3'>
          <div>
            <h3>example 1：无 [Aside] 的类型 </h3>
            <Layout className ="Wrapper" style={{height:400,width:500}}>
              <Header className='ex-headerAndFooter'>header</Header>
              <Content className='ex-content'>content</Content>
              <Footer className='ex-headerAndFooter'> footer</Footer>
            </Layout>
          </div>
          <div>
            <h3>example 2：[Aside] 在内部的类型 </h3>
            <Layout className ="Wrapper" style={{height:400,width:500}}>
              <Header className='ex-headerAndFooter'>header</Header>
              <Layout>
                <Aside className='ex-aside'>Aside</Aside>
                <Content className='ex-content'>content</Content>
              </Layout>
              <Footer className='ex-headerAndFooter'>footer</Footer>
            </Layout>
          </div>

          <div>
            <h3>example 3：[Aside] 在外部的类型 </h3>
            <Layout className ="Wrapper" style={{height:400,width:500}}>
              <Aside className='ex-aside'>Aside</Aside>
              <Layout>
                <Header className='ex-headerAndFooter'>header</Header>
                <Content className='ex-content'>content</Content>
                <Footer className='ex-headerAndFooter'>footer</Footer>
              </Layout>
            </Layout>
          </div>
        </div>

        <div className="onclickCode" onClick={()=>{setVisible(!visible)}}>展示代码</div>


      </div>
      <div className="codeDiv">
        {visible && code}
      </div>
    </div>
  )
}

export default  Demo