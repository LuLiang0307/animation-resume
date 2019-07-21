var result =`
    /*
    * 欣旺达的家人们好，我是梁璐
    * 我将以动画的形式来介绍我自己
    * 只用文字介绍太单调了
    * 我就用代码来介绍吧
    * 来看看这个简单百变的页面吧~~
    * 首先准备一些样式
    */
    *{transition: all 1s;}
    html{
        background: rgb(222,222,222);
        font-size: 16px;
    }  
    .code-wrapper {
        width: 50%;
        left: 0;
        position: fixed;
        height: 100%;
    }  
    /* 调整一下代码框大小 */
    #code {
        border:1px solid transparent;
        padding: 16px;
        overflow: hidden;
    }
    #code {
        left: 0;
        width: 100%;
        height:100%;
    }
    /* 让我的代码呼吸起来*/
    #code{
        animation: breath 1s infinite alternate-reverse;
    }
    /*现在我需要将一些代码高亮*/
    .token.selector{
        color: #690;
    }
    .token.property{
        color: #905;
    }
    .token.function{
        color: #DD4A68;
    }
    /* 不玩了，我来介绍一下自己吧 */
    /* 我需要一张白纸 */
    #code-wrapper{
        width: 50%; left: 0; position: fixed; 
        height: 100%;
      }
      #paper > .content {
       display: block;
      }
    /*好了，请看右边*/
    `

let result2 = `  `
let result3 = ` 
/*给页面添加一点CSS样式，变得好看起来吧*/
*{
    font-size: 12px;
    font-family: kai;
}
/* 使用一个库 marked.js 把 markdown 转化成 HTML*/
`
result4 = `
/* 还差一点点 */
.markdown-body {
    padding: 16px;
    background: white;
    overflow: auto;
}
/* Done~ 我的简介完成啦~ */
`
let md = 
`
## 梁璐  
湘潭大学2015级机械工程学院 | 欣旺达品质助理工程师 | 18873220186 | 2313970630@qq.com  

## 教育背景  
&nbsp;本科学士学位 | 2019年6月 | 湘潭大学  
* 主修： 过程装备与控制工程  
* 自学： 计算机 前端知识  
* 相关课程： HTML/CSS、JavaScript、jquery、ES6、nodejs等等。  

## 奖项荣誉  
* 连续两年获得湘潭大学校级奖学金  
* 获得优秀团员  
* 获得英语四六级证书  

## 技能  
**ECMASCRIPT**  
* 熟练使用JavaScript进行编程，熟悉ES6的常用语法，了解ES6的部分新特性。
* 熟悉面向对象、模块化开发的编程思想，并在实践中尝试使用设计模式进行开发。 

**原生JAVASCRIPT**  
* 在不使用框架的情况下，能使用原生JS常用API完成部分需求。  

**JQUERY**
* 熟悉jQuery的使用、定制与扩展过程，阅读过jQuery的部分源代码，尝试封装过jQuery的API.
* 能够使用jQuery制作轮播、事件代理、动画等。  

**NODE.JS**
* 了解node.js的一些知识，能够用node.js搭建小服务器，根据请求的url返回指定的数据。

**HTTP**
* 了解http的基础知识，了解常用状态码的含义，能够根据请求查看响应。  

**立即执行函数、AJAX、PROMISE**
* 了解立即执行函数、AJAX、Promise的概念以及实现。有相应的博客。  

**MVC设计模式**
* 熟悉M(model)V(view)C(controller)设计模式，并且能够应用到项目中。 
 
**原型链**
* 熟悉原型链的概念，能够根据原型链的prototype进行判断数据类型。能在实际的项目中进行应用并记录了博客。

## 我的github地址：https://github.com/dashboard
## 我的博客地址：https://luliang0307.github.io/index.html
`

writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md,()=>{
                writeCode(result + result2,result3,()=>{
                    convertMarkdownToHtml(()=>{
                        writeCode(result + result2 + result3,result4,()=>{
                            console.log('Done')
                        })
                    })
                })
            })
        })
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    let n=0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if(n >= code.length){
            window.clearInterval(id)
            fn && fn.call()
        }
        },10)
}

function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n=0
    let id = setInterval(()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n >= markdown.length){
            window.clearInterval(id)
            fn.call()
        }
        },10)
}

function convertMarkdownToHtml(fn){
    var div = document.createElement('div')  
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.style = 'background-color:white'
    markdownContainer.replaceWith(div)
    fn && fn.call()
}

