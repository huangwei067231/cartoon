// /*把代码code写到id为code的style标签里*/
// function writeCode(prefix, code, fn) {
//     let domCode = document.querySelector('#code')
//     // domCode.innerHTML = prefix || ''
//     let n = 0
//     let id = setInterval(() => {
//         n += 1
//         // domCode.innerHTML = code.slice(0, n);
//         domCode.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css);
//         styleTag.innerHTML = prefix + code.slice(0, n);
//         domCode.scrollTop = domCode.scrollHeight
//         if (n >= code.length) {
//             window.clearInterval(id)
//             fn && fn.call()                                                                 // fn2()                                                                                        // fn3(result)
//         }
//     }, 10)
// }


// function writeMarkdown(markdown, fn) {
//     let domPaper = document.querySelector('#paper>.content')
//     let n = 0
//     let id = setInterval(() => {
//         n += 1
//         domPaper.innerHTML = markdown.slice(0, n);
//         domPaper.scrollTop = domPaper.scrollHeight
//         if (n >= markdown.length) {
//             window.clearInterval(id)
//             fn && fn.call()                                                                 // fn2()

//         }
//     }, 10)
// }



// var result = `
// /*Inspired by http://strml.net/
//  *大家好，我是黄威
//  *将近六月份了，我还在自学前端课程，知识使人进步。
//  *下面我来用代码实现会动的简历效果
//  */

//  /*首先给所有元素添加过度效果*/
//  *{
//     transition:all .5s
//  }

//  /*白色背景太单调了，我们来点背景*/
// html{
//     color:rgb(222,222,222);background:rgb(0,43,54);
//     font-size:16px;
// }
// /*文字离边框太近了*/
// .styleEditor{
//     padding:.5em;
//     border:1px solid;
//     margin:.5em;
//     overflow:auto;
//     width:48vw;height:90vh;
// }
// /*让代码高亮*/
//     .token.selector{color:rgb(133,153,0)}
//     .token.property{color:rgb(187,127,0)}
//     .token.punctuation{color:yellow}
//     .token.function{color:rgb(42,161,152)}

// /*加点3D效果呗*/
// html{
//     perspective:1000px;
// }
// .styleEditor{
//     transform:rotate(360deg)
// }
// .styleEditor{
//     position:fixed;left:0;top:0;
//     -webkit-transition:none;
//     transition:none;
//     -webkit-transform:rotateY(10deg) translateZ(-100px);
//             transform:rotateY(10deg)translateZ(-100px);
// }
// /*加一个呼吸效果*/
// #code{
//     animation:breath 0.5s infinite alternate
// }
// /*接下来我给自己准备一张白纸*/`

// var result2 = `
//  #paper{
//      background:white;
//      position:fixed;
//      right:0;top:0;
//      padding:.5em;margin:.5em
//      width:45vw;
//      height:90vh;
//      border:1px solid;
//      color:#222;             /* dispiay:flex;*/
//      overflow:auto;          /*justify-content:center;*/
//                              /*align-item:center;*/
//  }
//  /*好了，我开始写简历了*/`

// var md = `
//  #自我介绍

//  我叫黄威
//  1992年12月出生
//  武汉科技大学学校毕业
//  专业是土木工程
//  系院是资源与环境工程学院
//  自学前端历时70天

//  #技能介绍

//  熟悉html,css,JavaScript,JSON,AJAX.

//  #项目介绍

//  1.苹果风格的轮播
//  2.会动的网页简历
//  3.pc端的简易画板

//  #联系方式

//  QQ：215767230
//  Email：weiwei215767@sina.com
//  手机：18126425437

//  /*这个简历好像差点什么
//   *对了，这个是Markdown格式的，我需要变成HR更友好的格式
//   *简单，用开源工具翻译成HTML就行了
//   */

//  /*再对HTML加点样式*/
//  #paper{
//      padding:2em;
//  } 
//  #paper h2{
//      display:inline-block;
//      border-bottom:1px solid;
//      margin:1em 0.5em;
//  }

//  #paper ul,#paper ol{
//      list-style:none;
//  }

//  #paper ul>li::before{
//      content:'·';
//      margin-right:0.5em;
//  }
//  #paper ol{
//      counter-reset:section;
//  }
//  #paper ol li::before{
//      counter-increment:section;
//      content:counters(section,'·') "";
//      margin-right:0.5em;
//  }
//  #paper blockquote{
//      margin:1em;
//      padding:0.5em;
//      background:#ddd
//  }`

// let result3 = `
//  /*这就是我的会动的简历
//   *谢谢观看
//   */`
// // var n = 0
// // var id = setInterval(() => {
// //     n += 1
// //     code.innerHTML = result.slice(0, n);
// //     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
// //     console.log(2)
// //     styleTag.innerHTML = result.slice(0, n);
// //     if (n >= result.length) {
// //         window.clearInterval(id)
// //         fn2()
// //         fn3(result)
// //     }
// // }, 10)
// writeCode('', result, () => {//writeCode call the function
//     creatPaper(() => {
//         writeCode(result, result2, () => {
//             writeMarkdown(md, () => {
//                 console.log(md)
//                 MarkdownToHtml(() => {
//                     writeCode(result + result2, result3, () => {
//                         console.log('完成')
//                     })
//                 })
//             })
//         })
//     })
// })


// function creatPaper(fn) {
//     var paper = document.createElement('div')
//     paper.id = 'paper'
//     var content = document.createElement('pre')
//     content.className = 'content'
//     paper.appendChild(content)
//     document.body.appendChild(paper)
//     fn & fn.call()
// }

// // function fn3(preResult){

// //  var n=0
// //  var id=setInterval(()=>{
// //         n +=1
// //         console.log(result.substring(0,n))
// //         code.innerHTML =preResult+result.substring(0, n);
// //         styleTag.innerHTML = preResult+result.substring(0, n);
// //         if(n>=result.length){
// //             window.clearInterval(id)
// //         }
// //     },10)
// // }
// function MarkdownToHtml(fn) {
//     var div = document.createElement('div')
//     div.className = 'Markdown html'
//     div.innerHTML = marked(md)

//     let Markdowncontent = document.querySelector('#paper>.content')
//     Markdowncontent.replaceWith(div)
//     fn && fn.call()
// }










// !function(){
//   var duration=50
// /*把code写到#code和style标签里*/
// function writeCss(prefix, code, fn) {
  
//     $('#button').on('click','button',function(e){
//       let $button=$(e.currentTarget)
//       let speed=$button.attr('data-speed')
//       console.log(speed)
//       $button.addClass('active').siblings('.active').removeClass('active')
//       switch(speed){
//         case 'slow':
//             duration=100
//             break;
//         case 'normal':
//             duration=50
//             break;
//         case 'fast':
//             duration=10
//             break;
//       }
//     })
  
//       let domCode = document.querySelector('#code')
//       let n = 0
//       let id = setTimeout(function run() {
//           n += 1
//           domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
//           styleTag.innerHTML = prefix + code.substring(0, n)
//           domCode.scrollTop = domCode.scrollHeight
//           if (n < code.length) {
//              setTimeout(run,duration)  
//           }else{
//             fn && fn.call()
//           }
//       }, duration)
//   }
//   function writeMarkdown(markdown, fn) {
//       let domPaper = document.querySelector('#paper>.content')
//       let n = 0
//       let id = setTimeout(function run() {
//           n += 1
//           domPaper.innerHTML = markdown.substring(0, n)
//           domPaper.scrollTop = domPaper.scrollHeight
//           if (n < markdown.length) {
//             setTimeout(run,duration)  
//           }else{
//             fn && fn.call()
//           }
//       }, duration)
//   }
  
//   var css1 = `/* 
//      * 大家好，我是黄威
//      * 将近六月份了，我还在自学前端课程，知识使人进步。
//      * 下面我来用代码实现会动的简历效果
//      * 只用文字做自我介绍太单调了
//      * 我就用代码来介绍吧
//      * 首先准备一些样式
//      */
//     *{
//       transition: all 1s;
//     }
//     html{
//       background: #eee;
//     }
//     #code{
//       border: 1px solid #aaa;
//       padding: 16px;
//     }
//     /* 我需要一点代码高亮 */
//     .token.selector{ color: #690; }
//     .token.property{ color: #905; }
//     /* 加一个呼吸效果 */
//     #code{
//       animation: breath 0.5s infinite alternate-reverse;
//     }
//     #code{
//       transform:rotate(360deg);
//     }
//     /* 现在正式开始 */
//     /* 我需要一张白纸 */
//     #code-wrapper{
//       width: 50%; left: 0; position: fixed; 
//       height: 100%;
//     }
//     #paper > .content {
//      display: block;
//     }
//     /* 于是我就可以在白纸上写字了，请看右边 */
//     `
  
//   var css2 = `
//     /* 接下来用一个优秀的库 marked.js
//      * 把 Markdown 变成 HTML
//      */
//     `
//   var md = `
//     # 自我介绍
   
//     我叫黄威
//     1992年12月出生
//     武汉科技大学学校毕业
//     专业是土木工程
//     系院是资源与环境工程学院
//     自学前端历时70天
  
//     # 技能介绍
  
//     熟悉html css JavaScript JSON AJAX
   
//     # 项目介绍
  
//     1.苹果风格的轮播
//     2.会动的网页简历
//     3.pc端的简易画板
  
//     # 联系方式
  
//     -QQ 215767230
//     -Email weiwei215767@sina.com
//     -手机 18126425437
//     `
  
//   let css3 = `
//     /*
//      * 这就是我的会动的简历
//      * 谢谢观看
//      */
//     `
  
//   writeCss('', css1, () => { // writeCss call the function
//       createPaper(() => {
//           writeMarkdown(md, () => {
//               writeCss(css1, css2, () => {
//                   convertMarkdownToHtml(() => {
//                       writeCss(css1 + css2, css3, () => {
//                               console.log('完成')
                           
                              
//                           })
//                       })
//                   })
//               })
//           })
//       })
  
  
  
  
  
//   function createPaper(fn) {
//       var paper = document.createElement('div')
//       paper.id = 'paper'
//       var content = document.createElement('pre')
//       content.className = 'content'
//       paper.appendChild(content)
//       document.body.appendChild(paper)
//       fn && fn.call()
//   }
  
//   function convertMarkdownToHtml(fn) {
//       var div = document.createElement('div')
//       div.className = 'html markdown-body'
//       div.innerHTML = marked(md)
//       let markdownContainer = document.querySelector('#paper > .content')
//       markdownContainer.replaceWith(div)
//       fn && fn.call()
//   }
// }.call()



!function(){
  var duration=50
  /*把code写到#code和style标签里*/
 
  function writeCode(prefix,code,fn){
    $('#button').on('click','button',function(e){
      let $button=$(e.currentTarget)
      let speed=$button.attr('data-speed')
      console.log(speed)
      $button.addClass('active').siblings('.active').removeClass('active')
      switch(speed){
        case 'slow':
            duration=100
            break;
        case 'normal':
            duration=50
            break;
        case 'fast':
            duration=10
            break;
      }
    })
    let container=document.querySelector('#code')
    let styleTag=document.querySelector('#styleTag')
    let n=0
    let id = setTimeout(function run(){
       n += 1
      // container.innerHTML=code.substring(0,n)
       //styleTag.innerHTML=code.substring(0,n)

       container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0, n)

       container.scrollTop=container.scrollHeight
       if (n < code.length) {
             setTimeout(run,duration) 
            }else{
                    fn && fn.call()
                  }
              }, duration)
          }
  let code=`*{
    transition:all .3s;
  }
  .preview{
    border:1px solid red;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #898989
  }
  /* 我需要一点代码高亮 */
  .token.selector{
    color: #DD4A68;
  }
  .token.property{
    color:#690;
  }
  .token.punctuation{
    color: #999;
  } 
  .token.function{
    color: #905;
  }
  .token.comment{
    color: slategray;
  }
  
  #main {
    margin: 0 auto;
    width: 200px;
    height: 360px
  }
  .minion {
    position: absolute;
  }
  #minion-body {
    background: #fce55b;
    border-radius: 100px 100px 60px 60px;
    height: 340px;
    width: 200px;
    z-index: 0;
  }
  
  
  /*--------------------
  -- Goggles and Eyes --
  --------------------*/
  
  #goggles {
    background: #2a2a2a;
    border-radius: 2px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    height: 26px;
    margin: 80px 0 0 -2px;
    width: 204px;
    z-index: 10;
  }
  #frame {
    background: #898989;
    border-radius: 2px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    height: 32px;
    margin: -3px 0 0 46px;
    width: 108px;
    z-index: 11;
  }
  #lense {
    background: #000;
    border-radius: 50%;
    border: solid 14px #898989;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    height: 100px;
    margin: -36px 0 0 50px;
    width: 100px;
    z-index: 12;
  }
  #eye-ball {
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;
    height: 80px;
    margin: -26px 0 0 60px;
    width: 80px;
    z-index: 13;
  }
  #eye-pupil {
    background: #000000;
    border-radius: 50%;
    border: solid 8px #3F1515;
    height: 26px;
    margin: 30px 0 0 26px;
    width: 26px;
    z-index: 13;
  }
  
  
  /*--------------------
  -------- Mouth -------
  --------------------*/
  
  #mouth {
    background: #640F0F;
    border-radius: 0 0 100px 100px;
    height: 50px;
    margin: 170px 0 0 50px;
    width: 100px;
    z-index: 20;
  }
  #mouth-shadow {
    border-radius: 0 0 100px 100px;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;
    height: 50px;
    width: 100px;
    z-index: 29;
  }
  .teeth {
    background: #fff;
    border-radius: 0 0 8px 8px;
    float: left;
    height: 14px;
    margin: 0 0 0 0;
    width: 20px;
    z-index: 22;
  }
  #tongue {
    background: #D54747;
    border-radius: 50%;
    height: 20px;
    margin: 30px 0 0 23px;
    width: 54px;
    z-index: 20;
  }
  
  
  /*--------------------
  --- Arms and Hands ---
  --------------------*/
  
  #left-arm {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    background: #fce55b;
    border-radius: 100px;
    height: 70px;
    margin: 210px 0 0 -20px;
    width: 20px;
    z-index: -30;
  }
  #left-hand {
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
    background: #fce55b;
    border-radius: 100px;
    height: 90px;
    margin: 240px 0 0 -4px;
    width: 20px;
    z-index: 50;
  }
  #right-arm {
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
    background: #fce55b;
    border-radius: 100px;
    height: 70px;
    margin: 210px 0 0 200px;
    width: 20px;
    z-index: -30;
  }
  #right-hand {
    -webkit-transform: rotate(-120deg);
    transform: rotate(-120deg);
    background: #fce55b;
    border-radius: 100px;
    height: 90px;
    margin: 240px 0 0 190px;
    width: 20px;
    z-index: 50;
  }
  
  /*--------------------
  ------ Dungarees -----
  --------------------*/
  
  #dungarees {
    margin: 280px 0 0 0;
  }
  #left-strap {
    -webkit-transform: rotate(-50deg);
    transform: rotate(-50deg);
    background: #336188;
    border-radius: 16px 0 4px 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 80px;
    margin: -90px 0 0 18px;
    width: 14px;
    z-index: 50;
  }
  #right-strap {
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
    background: #336188;
    border-radius: 0 16px 4px 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 80px;
    margin: -90px 0 0 170px;
    width: 14px;
    z-index: 50;
  }
  #dungarees-main {
    background: #336188;
    border-radius: 0 0 100px 100px;
    box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.5);
    height: 60px;
    width: 200px;
    z-index: 36;
  }
  #dungarees-front {
    background: #336188;
    border-radius: 10px 10px 0 0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 70px;
    margin: -40px 0 0 40px;
    width: 120px;
    z-index: 36;
  }
  #dungarees-pocket {
    background: #336188;
    border-radius: 0 0 50% 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 40px;
    margin: -14px 0 0 70px;
    width: 60px;
    z-index: 50;
  }
  #dungarees-pocket-left {
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
    background: #336188;
    border-radius: 0 0 50% 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    height: 36px;
    margin: 10px 0 0 14px;
    width: 40px;
    z-index: 50;
  }
  #dungarees-pocket-right {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    background: #336188;
    border-radius: 0 0 50% 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    height: 36px;
    margin: 10px 0 0 146px;
    width: 40px;
    z-index: 50;
  }
  #dungarees-logo {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border: 5px solid;
    height: 20px;
    margin: -6px 0 0 90px;
    width: 20px;
    z-index: 50;
  }
  
  
  /*--------------------
  ---- Legs and Feet ---
  --------------------*/
  #legs {
    margin: 260px 0 0 0;
  }
  #left-leg, #right-leg {
    background: #336188;
    height: 80px;
    width: 40px;
    z-index: 31;
  }
  #left-leg {
    margin: 10px 0 0 50px;
  }
  #right-leg {
    margin: 10px 0 0 110px;
  }
  #left-foot, #right-foot {
    background: #272727;
    border-bottom: 6px solid #000000;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    height: 24px;
    width: 50px;
    z-index: 34;
  }
  #left-foot {
    border-radius: 10px 0 4px 4px;
    margin: 90px 0 0 40px;
  }
  #right-foot {
    border-radius: 0 10px 4px 4px;
    margin: 90px 0 0 110px;
  }`
  writeCode('',code)
}.call()