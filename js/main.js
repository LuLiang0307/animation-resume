var result = `
    /*
    * 亲爱的面试官，你好，我是梁璐，我是一名前端工程师
    * 下面，我将以动画的形式来介绍我自己
    * 只用文字介绍太单调了
    * 我就用代码来介绍吧
    * 来看看这个简单百变的页面吧~~
    * 首先准备一些样式
    */
    *{transition: all 1s;}
    html{
        background: rgb(222,222,222);
        font-size: 20px;
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
        width: 50%; left: 0; position: fixed;height: 100%;
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
    font-size: 20px;
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
湘潭大学2015级机械工程学院 | 18873220186 | 2313970630@qq.com  

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
**HTML/CSS**
* 熟练使用HTML5和CSS3的功能，比如title、section、canvas等。
* 遵循HTML语义化的原则进行代码编写。    

**ECMASCRIPT**
* 熟练使用JavaScript进行编程，熟悉ES6的常用语法，了解ES6的部分新特性。
* 熟悉面向对象、模块化开发的编程思想，并在实践中尝试使用设计模式进行开发。

**原生JAVASCRIPT**
* 在不使用框架的情况下，能使用原生JS常用API完成部分需求。

**DOM事件模型**
* 熟悉DOM事件模型，捕获、冒泡以及如何阻止事件的传递。

**JQUERY**
* 熟悉jQuery的使用、定制与扩展过程，阅读过jQuery的部分源代码，尝试封装过jQuery的API。
* 能够使用jQuery制作轮播、事件代理、动画等。

**NODEJS**
* 了解nodejs语法，使用nodejs搭建小型服务器，完成一个注册登录界面。

**MVC|MVVM设计模式**
* 熟悉M(model)V(view)C(controller)设计模式，并且能够应用到项目中。
* 了解MVVM设计模式。

**WEB性能优化**
* 熟悉web性能优化，常使用cache-control优化缓存，使用Etag优化响应，使用GZIP减小响应体积，可以自己实现lazyload和节流等。

**HTTP**
* 了解Cookie、Session、SessionStorage、LocalStorage等。
* 了解cache-control、Expires和Etag的工作原理。   

**同源策略和跨域**
* 了解同源策略，以及跨域的常用方法。
* 熟悉JSONP的原理。

**WEBPACK**
* 日常项目中，使用webpack项目工程化。

**VUE**
* 了解vue的生命周期的钩子函数。
* 了解vue的组件通信的原理。

**ASP.NET**
* 掌握C#语言，精通后端的增删改查，熟练使用js相关技术编写前端页面。

**网页安全**  
* 了解XSS 攻击和CSRF 攻击及其预防方法。

## 我的github地址：https://github.com/LuLiang0307
## 我的博客地址：https://www.jianshu.com/u/5ff8a6a3832e
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md, () => {
                writeCode(result + result2, result3, () => {
                    convertMarkdownToHtml(() => {
                        writeCode(result + result2 + result3, result4, () => {
                            console.log('Done')
                        })
                    })
                })
            })
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css); //高亮代码，使用prism库
        styleTag.innerHTML = prefix + code.substring(0, n) //将之前的代码连接起来
        domCode.scrollTop = domCode.scrollHeight //保证代码总是在最底下
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function convertMarkdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.style = 'background-color:white'
    markdownContainer.replaceWith(div)
    fn && fn.call()
}