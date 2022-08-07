# UI 框架
## 软件，第三方库版本控制
这里使用 3.4.1，当前最新版本 5.0.1.  `yarn global add create-react-app@3.4.1`   
由于需要支持 typescript，所以  `create-react-app wangcai --template typescript`  
千万不要安装 node-sass, 推荐使用 dart-sass. 原因：node-sass 需要从 github上下载文件，还需要单独设置镜像源，有需要本地编译。
注意，不能直接安装 dart-sass, 这样也会出现编译报错。  
安装方法：其实被之上就是npm将安装的 node-sass 偷梁换柱，变成 dart-sass, 也就是 npm 6.9 之后出现的新功能 package alias，重命名。    
`yarn add node-sass@npm:dart-sass`  
将 src 目录设置为 根目录，否则在 `@imprt 'xxx/yyy` 会出现 IDE 不能识别路径问题。  
创建 helper.scss 变量文件。
安装 react-router-dom  
`yarn add react-router-dom@5.1.2 `
`yarn add --dev @types/react-router-dom `
之后还需要 Router, Redux, SASS 等等。

- 目录详解  
public 静态文件  
src 主文件  
App.tsx 主组件  
index.tsx 入口文件  
setupTests.ts 测试文件  
react-app-env.d.ts TS 类型声明  
tsconfig.json TS 配置文件  
.tsx 就是支持 标签 的ts文件

- css 处理  
css normalize处理，在index.css 中添加 `@import-normalize` 就行了。  
css reset 和 normalize 的区别， css reset 是重置css的样式，css normalize 是保证 css 样式在不同浏览器上的展示结果基本一致。  
这里采用的是 styled-component方法， 也就是 css in js 的处理方式,@types 表示 ts 支持文件  
```shell script
 yarn add styled-components@5.0.1
 yarn add --dev  @types/styled-components       
``` 
使用方法：
```ts
import styled from 'styled-components'
const Button  = styled.button`
  background-color:red
`
```
- 字体解决方案  
第三方有 fonts.css， 快速上手使用。 

## svg 处理方法
svg-sprite-loader@4.2.2   
svgo-loader@2.2.1  
将下面代码添加在 yarn eject 之后的 config 的 webpack.config.js 文件的 中, function => return => module:{rules=> oneOf[]}
```js
 {
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader', options: {} },
    { loader: 'svgo-loader', option:{}},
  ]
},
```
安装 `yarn add @babel/helper-create-regexp-features-plugin` ，否则 yarn start 可能会打不开  
如果使用 import 引入 svg文件，会出现 TreeShaking，也就是 如果该文件没有被引用（虽然我们在 <svg> 标签中引用了），那么就不会被编译，也就相当于没用。  
但是使用 require 就不会受到影响。  

- 如何直接引入 SVG 文件夹
由于 typescript 不认识 js 的代码，需要安装 `yarn add --dev @types/webpack-env@1.15.1`  
```tsx
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
```
- tree-shaking
有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝。实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 Tree-Shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。
- 解决className 问题  
多个 className，用户需要传入其中若干个或不传，原本存在一个，但是之间不能相互干扰。
```ts
function classes(...names:(string | undefined)[]){
  // 加上 Boolean 是因为 判断是否为真，就返回真，
  return names.filter(Boolean).join(' ')
}
export default  classes
```
## Dialog
- 三种模式  
alert：弹出对话框，只有确定按钮，确定后执行某个函数。  
confirm：交互对话框，有确定和取消按钮，分别执行对应函数。  
modal：内容对话框，仅展示内容，只有点右上角 叉叉 取消。
- react 知识点
<Fragment> 标签就不会再渲染时候出现，就相当于 <template>  
React 克隆 element  
```ts
// React.cloneElement 的用法，复制这个buttons之后，添加一个 key 在渲染。 存在 性能损失
props.buttons.map((button, index) => React.cloneElement(button, {key: index})

```
- 为了防止用户使用样式 z-index，导致弹窗之后 mask 不能覆盖所有元素。  
```tsx
// x 就是之前 return 的标签元素
  return (
   ReactDOM.createPortal(x,document.body)
  );
```

- 闭包 实现传递 API  
```js
function f1(){
    let visible = false;
    return ()=>{
        visible = true;
    }
}
const api = f1()
api()               //  实现修改 f1 函数内部的 visible
```






















