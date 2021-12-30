1. 布局
容器默认存在两个轴：水平交叉轴（main axis）和垂直交叉轴（cross axis），项目默认沿主轴排列。
flex布局属性的使用
<1> 
flex-direction 属性决定主轴的方向（即项目的排列方向）。
row 沿水平主轴从左到右排列 | row-reverse | column 沿垂直主轴从上到下排列 | column-reverse;

<2>
flex-wrap lex-wrap属性定义，如果一条轴线排不下，如何换行。
nowrap（默认）：不换行 wrap：换行，第一行在上方 wrap-reverse：换行，第一行在下方。

<3>
justify-content属性定义了项目在主轴上的对齐方式。
flex-start 左对齐 | flex-end 右对齐 | center 中间对齐| space-between 两端对齐 | space-around;

<4>
align-items属性定义项目在交叉轴上如何对齐。
flex-start 交叉轴起点对齐 | flex-end 终点对齐 | center 中点对齐| baseline 项目的第一行文字的基线对齐 | stretch; （默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度

<5>
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

其中子元素属性
order: 数值越小,排列越靠前,默认为0
flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
用来“瓜分”父项的“剩余空间”。（当父元素的宽度大于所有子元素的宽度的和时（即父元素会有剩余空间），子元素如何索取分配父元素的剩余空间。值越大，索取的越厉害。）

flex-shrink: 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
用来“瓜分”父项的“剩余空间”。（当父元素的宽度大于所有子元素的宽度的和时（即父元素会有剩余空间），子元素如何索取分配父元素的剩余空间。值越大，索取的越厉害。）

flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
flex: 属性是flex-grow, flex-shrink 和 flex-basis的简写，后两个属性可选。默认值为：flex:0 1 auto。

flex:0 1 auto 有剩余空间,只放大不缩小
flex: none = flex: 0 0 auto 有剩余空间,不放大不缩小,最终尺寸表现为最大内容宽
flex: 0 = flex: 0 1 0% 有剩余空间,项目宽度为其内容宽度,最终尺寸表现为最小内容宽度
flex: auto =  flex: 1 1 auto 元素尺寸可以弹性增大,也可以减小 ,尺寸不足时优先最大化内同尺寸
flex: 1 === flex: 1 1 0% 元素尺寸可以弹性增大,也可以减小 ,尺寸不足时优先最小化内同尺寸



grid布局
将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局
fr （单位）
剩余空间分配数，用于在一些列长度值中分配剩余空间，如果多个元素已指定了多个部分，则剩下的空间根据各自的数字按比例分配。
gr （单位）
网格数，未被W3C规定，一般不使用。

定义行与列的轨道大小
grid-template-columns：定义网格的列
grid-template-rows：定义网格的行

justify-items: 内容在表格中的对齐方式
start:内容与网格区域的左端对齐
end:内容与网格区域的右端对挤
center:内容位于网格区域的中间位置
stretch:内容宽度占据整个网格区域空间(这是默认值)

align-items是沿着竖直方向，内容在表格中的对齐方式，它有四个属性值：
start:内容与网格区域的顶端对齐
end:内容与网格区域的低端对挤
center:内容位于网格区域的垂直中心位置
stretch:内容宽度占据整个网格区域空间(这是默认值)

2. 盒模型
box-sizing -----  context-box(标准盒模型) border-box(ie 盒模型)

3. 选择器优先级
!important > 行内样式 > #id > .class > tag > * > 继承 > 默认

4. 浏览器缓存
<1>
强缓存 ：Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，Cache-Control的 max-age 优先级高于 Expires

<2>
协商缓存 :缓存已经过期时
唯一标识方案: Etag(response 携带) & If-None-Match(request携带，上一次返回的 Etag): 服务器判断资源是否被修改
最后一次修改时间: Last-Modified(response) & If-Modified-Since (request，上一次返回的Last-Modified)
如果一致，则直接返回 304 通知浏览器使用缓存;如不一致，则服务端返回新的资源
Etag 的优先级高于 Last-Modified
Last-Modified 缺点：
周期性修改，但内容未变时，会导致缓存失效
最小粒度只到 s， s 以内的改动无法检测到

5. http状态码
2XX 成功
200 OK，表示从客户端发来的请求在服务器端被正确处理
204 No content，表示请求成功，但响应报文不含实体的主体部分
206 Partial Content，进行范围请求

3XX 重定向
301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
302 found，临时性重定向，表示资源临时被分配了新的 URL
303 see other，表示资源存在着另一个 URL，应使用 GET 方法丁香获取资源
304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
307 temporary redirect，临时重定向，和302含义相同

4XX 客户端错误
400 bad request，请求报文存在语法错误
401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
403 forbidden，表示对请求资源的访问被服务器拒绝
404 not found，表示在服务器上没有找到请求的资源

5XX 服务器错误
500 internal sever error，表示服务器端在执行请求时发生了错误
503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

6. 排序算法


7. 
Element.innerHTML 返回一个字符串，等同于该元素包含的所有 HTML 代码
Element.outerHTML 返回一个字符串，表示当前元素节点的所有 HTML 代码，包括该元素本身和所有子元素

8. 
target.addEventListener(type, listener[, useCapture]);
useCapture ：默认为false监听函数只在冒泡阶段被触发
监听函数内部的this，指向当前事件所在的那个对象(对应的元素节点)；如果使用箭头函数则不是，为定义时调用对象的this

9. 事件传播阶段
<1> 捕获阶段 从window对象传导到目标节点
<2> 目标阶段 在目标节点上触发
<3> 冒泡阶段 从目标节点传导回window对象

10. 事件代理： 由父元素统一处理子元素的事件

11. Event.currentTarget，Event.target
Event.currentTarget 事件当前正在通过的节点(当前正在执行的监听函数所在的那个节点) 值会变化 
Event.target 事件的原始触发节点

12. 创建对象
<1> 工厂模式
function factory(name){
    var o = new Object()
    o.name = name
    o.getName = function(){
        console.log(this.name)
    }
    return o
}
缺点：对象无法识别，因为所有的实例都指向一个原型
<2> 构造函数模式
function Person(name){
    this.name = name
    this.getName = function(){
        console.log(this.name)
    }
}
优点：实例可以识别为一个特定的类型
缺点：每次创建实例时，每个方法都要被创建一次
<3> 构造函数模式与原型模式双剑合璧
function Person(name){
    this.name = name
}
Person.prototype.getName = function(){
        console.log(this.name)
    }
优点：该共享的共享，该私有的私有，使用最广泛的方式
<4> 寄生构造函数
function Person(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };
    return o;
}
缺点: 创建的实例使用 instanceof 都无法指向构造函数！

13. 对象继承
<1> 原型链继承
 function Parent(){
     this.person = [1,2]
 }
 function Children(){

 }
 Children.prototype = new Parent()
 缺点: 引用类型的属性被所有实例共享
<2> 构造函数继承
function Parent(){
     this.person = [1,2]
 }
 function Children(){
     Parent.call(this)
 }
优点；1.避免了引用类型的属性被所有实例共享 2.可以在 Child 中向 Parent 传参
<3> 组合继承
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name); 
    this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
<4>寄生组合式继承
//js的create方法,让实例的原型指向传参
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}
// 当我们使用的时候：
prototype(Child, Parent);
优点: 只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；

14. css
选择器:
<1> 基本选择器
* 通用元素选择器，匹配任何元素
E 标签选择器，匹配所有使用E标签的元素
.info class选择器，匹配所有class属性中包含info的元素
#footer id选择器，匹配所有id属性等于footer的元素
<2> 多元素的组合选择器
E,F 多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔
E F 后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔
E > F 子元素选择器，匹配所有E元素的子元素F
E + F 毗邻元素选择器，匹配所有紧随E元素之后的同级元素F
<3> 属性选择器
E[att] 匹配所有具有att属性的E元素不考虑值E 在此处可以省略，比如"[cheacked]"
E[att=val] 匹配所有att属性等于"val"的E元素
E[att~=val] 匹配所有att属性具有多个空格分隔的值、其中一个值等于"val"的E元素
E[att|=val] 匹配所有att属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的E元素，主要用于lang属性，比如"en"、"en-us"、"en-gb"等等
<4> 伪类
E:first-child 匹配父元素的第一个子元素
E:hover 匹配鼠标悬停其上的E元素
E:focus 匹配获得当前焦点的E元素
E:lang(c) 匹配lang属性等于c的E元素
:first @page CSS 伪类选择器 描述的是：打印文档的时候，第一页的样式
E:first-child 表示在一组兄弟元素中的第一个元素
:first-of-type表示一组兄弟元素中其类型的第一个元素。
:focus表示获得焦点的元素(如表单输入)
:last-child CSS 伪类 代表父元素的最后一个子元素
<5> 伪元素
E:first-line 匹配E元素的第一行
E:first-letter 匹配E元素的第一个字母
E:before 在E元素之前插入生成的内容
E:after 在E元素之后插入生成的内容

<6> 选择器优先级
内联样式 1000 > id 选择器 100> 类选择器 = 伪类选择器 = 属性选择器 10> 标签选择器 = 伪元素选择器 1


伪类及伪元素:伪类选择元素基于的是当前元素处于的状态，或者说元素当前所具有的特性，而不是元素的id、class、属性等静态的标志。由于状态是动态变化的，所以一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式。由此可以看出，它的功能和class有些类似，但它是基于文档之外的抽象，所以叫伪类。
与伪类针对特殊状态的元素不同的是，伪元素是对元素中的特定内容进行操作，它所操作的层次比伪类更深了一层，也因此它的动态性比伪类要低得多。实际上，设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行，选取某些内容前面或后面这种普通的选择器无法完成的工作。它控制的内容实际上和元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。

<1> 伪元素
:first-letter 选择元素的第一个字母 :first-line 选择元素的第一行
:before 在元素之前插入元素  :after 在元素之后插入内容
<2> 伪类
:link 未访问的链接 :visited 已访问的链接 :hover 鼠标划过链接 :active 已选中的链接 :first-child 选择器匹配属于任意元素的第一个子元素
:nth-child(n) 父元素匹配的第n个子元素

层级问题（谁高）
总结：标准流盒子，低于浮动的盒子，浮动的盒子又低于定位的盒子。
定位高于浮动，浮动高于标准流。（高低和占不占位置无关）
用法：
1、必须有定位。（除去static之外）。
2、给定 z-index 的值为层级的值。（不给默认为0）
a. 层级为0的盒子，也比标准流和浮动高。
b. 层级为负数的盒子，比标准流和浮动低。
c. 层级不取小数）
d. 层级一样，后面的盒子比前面的层级高。
e. 浮动或者标准流的盒子，后面的盒子比前面的层级高。
f. abselute是不占位置的，relative是占位置的。而层级的高低，是和占不占位置没有关系的。

清除浮动
<1> 父级添加overflow: hidden
<2> 浮动元素添加多一个块级元素,并添加clear: both属性
<3> 父级元素添加伪类after,并添加clear: both属性
<4>

15. css3
border-radius 制作圆角 background-image 添加背景图片 
background-size 背景图像的大小
transform 对元素进行移动、缩放、转动、拉长或拉伸:主要有
<1>translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动
<2> rotate() 个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转

16. 前端跨域
发送 ajax 请求的是你的浏览器，所谓 User Agent，而「跨域」的限制 仅仅在浏览器和服务器之间。我们不能强制远程服务器都像例子中那样允许「跨域」请求，所以我们能做的就是不要使用浏览器发送请求。所以在前端开发中，一种常见的规避跨域的方法就是：把 ajax 请求发送到你的本地开发服务器，然后本地开发服务器再把 ajax 请求转发到远端去，从网络拓扑上看本地开发服务器起着「反向代理」的作用。本地服务器和远端服务器是「服务器和服务器间的通信」，就不存在跨域问题了。

17. 左侧固定右侧自适应布局
<1> 左侧块级元素设置浮动 右侧块级元素左外边距宽度 = 左侧块级元素宽度
<2> 左右两侧块级元素均设置inline-block , 右侧块级元素宽度使用calc(100%-左宽度)
<3> flex实现，左侧固定大小，右侧设置flex:1
    
    三栏式布局
<1> 父div设置display: flex , 子左右俩div设置固定宽度,中间div设置flex:1
<2> 中间div元素 设置 calc(100%-左右宽度)  
<3> 左右设置宽度且浮动 ，中间设置margin  
<4> 利用table布局即表格的样式，实现三栏布局 display: table-cell;左右设置宽度
<5> grid布局 父div设置 display: grid; grid-template-columns: 固定宽 auto 固定宽;

18. 防抖与节流
防抖: 尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行
节流: 持续触发事件，每隔一段时间，只执行一次事件

19. DOMContentLoaded 与 load
DOMContentLoaded 事件在 html文档加载完毕，并且 html 所引用的内联 js、以及外链 js 的同步代码都执行完毕后触发
当页面 DOM 结构中的 js、css、图片，以及 js 异步加载的 js、css 、图片都加载完成之后，才会触发 load 事件

20. VUE路由守卫
1. 全局前置守卫 beforeEach (to,from,next)
当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。

2. 全局解析守卫 beforeResolve(to,from)
区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用

3. 全局后置钩子 afterEach(to,from)
注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身

4. 组件内的守卫
beforeRouteEnter beforeRouteUpdate beforeRouteLeave
(1)在渲染该组件的对应路由被 confirm 前调用 不！能！获取组件实例 `this`
(2)在当前路由改变，但是该组件被复用时调可以访问组件实例 `this`
(3) 导航离开该组件的对应路由时调用 可以访问组件实例`this`

5. 完整的流程
导航被触发。
在失活的组件里调用 beforeRouteLeave 守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

21. webgl
<1> 三大组件
场景: 场景是所有物体的容器  var scene =new THREE.Scene();
相机: 相机决定了场景中那个角度的景色会显示出来 场景只有一种，但相机却有很多种
渲染器:渲染器决定了渲染的结果应该画在页面的什么元素上面，并且以怎样的方式来绘制

22. 正则
正则表达式中，需要反斜杠转义的，一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\。需要特别注意的是，如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。

? 问号表示某个模式出现0次或1次，等同于{0, 1}。
* 星号表示某个模式出现0次或多次，等同于{0,}。
+ 加号表示某个模式出现1次或多次，等同于{1,}

+?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
*?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
??：表格某个模式出现0次或1次，匹配时采用非贪婪模式。

23. 取反！可以表示为fasle(任何对象都不是)
undefined、null、 NaN、 0、 ''、 false


24. eventLoop

宏队列:macrotask 一些异步任务的回调会依次进入macro task queue，等待后续被调用

setTimeout
setInterval
setImmediate (Node独有)
requestAnimationFrame (浏览器独有)
I/O
UI rendering (浏览器独有)

微队列:microtask 另一些异步任务的回调会依次进入micro task queue，等待后续被调用

process.nextTick (Node独有)
Promise
Object.observe
MutationObserver

浏览器eventloop

执行全局Script同步代码，这些同步代码有一些是同步语句，有一些是异步语句（比setTimeout等）；
全局Script代码执行完毕后，调用栈Stack会清空；
从微队列microtask queue中取出位于队首的回调任务，放入调用栈Stack中执行，执行完后microtask queue长度减1；
继续取出位于队首的任务，放入调用栈Stack中执行，以此类推，直到直到把microtask queue中的所有任务都执行完毕。注意，如果在执行microtask的过程中，又产生了microtask，那么会加入到队列的末尾，也会在这个周期被调用执行；
microtask queue中的所有任务都执行完毕，此时microtask queue为空队列，调用栈Stack也为空；
取出宏队列macrotask queue中位于队首的任务，放入Stack中执行；
执行完毕后，调用栈Stack为空；
重复第3-7个步骤；


NodeJS的Event Loop过程：

执行全局Script的同步代码
执行microtask微任务，先执行所有Next Tick Queue(是放置process.nextTick(callback)的回调任务)中的所有任务，再执行Other Microtask Queue中(放置其他microtask，比如Promise等)的所有任务
开始执行macrotask宏任务，共6个阶段，从第1个阶段开始执行相应每一个阶段macrotask中的所有任务，注意，这里是所有每个阶段宏任务队列的所有任务，在浏览器的Event Loop中是只取宏队列的第一个任务出来执行，每一个阶段的macrotask任务执行完毕后，开始执行微任务，也就是步骤2
Timers Queue -> 步骤2 -> I/O Queue -> 步骤2 -> Check Queue -> 步骤2 -> Close Callback Queue -> 步骤2 -> Timers Queue ......
这就是Node的Event Loop


25. 浏览器渲染

渲染引擎处理网页，通常分成四个阶段
1 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
2 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
3 布局：计算出渲染树的布局（layout）。
4 绘制：将渲染树绘制到屏幕

渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）

26. js判断相等
基本类型通过它们的值（value）进行比较，而对象通过它们的引用（reference）进行比较。JavaScript 检查对象是否具有对内存中相同位置的引用: 判断对象类型无论是==还是===都是判断对象引用的内存位置

27. webpack常见优化手段

1. loader处理文件指定处理目录

2. splitChunks 抽离公共代码

3. 启用tree shaking 避免引入无用代码

4. 配置多进程打包适合中大型项目,小型项目分配多个进程反而会减慢编译速度 配置插件happypack

5. 启用热替换模块 devserver:{hot:true}

27. html5新特性

html语义标签(header、footer、nav、article) 表单增强(input新特性:color、date、month、email)
多媒体 、存储、WebSocket、画布

28. css画圆
   div:  {width:100px;
		 height:100px;
         border:3px solid red;
	     border-radius: 50%;}

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle cx="100" cy="50" r="40" stroke="black"
       stroke-width="2" fill="red" />
    </svg>

    <canvas> ctx.arc(x,y,r,start,stop)

    css画三角形

    1. 利用border三边透明，一边颜色;div宽高为 0
    2. 利用canvas,moveto()、lineTo()

29. css脱离文档流
   <1> float <2> position:absolute <3> position: fixed

30. 组件通信

React:
     父子组件采用props以及回调函数形式
     祖孙组件采用useContext,嵌套太深组件不建议
     不相干组件采用事件发布订阅
     全局建议通过reaxt-redux状态管理

Vue  父子组件通常采用props以及$emit 、ref以及refs
     祖孙组件可以采用依赖注入(provide,inject)依赖注入所提供的属性是非响应式的
     父{
         data(){
             return ...
         },
         provide(){
             return {
                 app:...
             }
         }
     }
     子{
         inject:[app]
     }
     全局建议事件总线或者Vuex

React 常见面试:
  setState: 将数据放入队列，通过batchingStrategy.isBatchingUpdates来判断是排队等待，还是直接更新。在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略；React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。

  31. 插槽

  vue 使用绑定slot形式
  react 使用props或者props.children

  32. react、vue联系

  共同点: 使用虚拟dom展示界面

  不同点: 一个是手动挡一个是自动挡 : Vue 使用的是 web 开发者更熟悉的模板与特性
  Vue跟React的最大区别在于数据的reactivity，就是反应式系统上。Vue提供反应式的数据，当数据改动时，界面就会自动更新，而React里面需要调用方法SetState。我把两者分别称为Push-based和Pull-based


33. 前端性能优化你会怎么做？
减少回流重绘
缩小代码体积，例如：Tree-shaking、代码压缩、代码分割、Scope-hoisting等
减少请求数，例如：雪碧图、基础库打成一个包
并发请求，使用cdn，突破浏览器对同一域名的TCP连接数限制，或者使用http2
运行时加载，例如：图片懒加载，组件动态import
缓存，例如：http缓存，dll等

34. 运算符
对于“&&”和‘||’的规律：
1、只要“||”前面为false，无论“||”后面是true还是false，结果都返回“||”后面的值。
2、只要“||”前面为true，无论“||”后面是true还是false，结果都返回“||”前面的值。
3、只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;
4、只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;

35. js全局函数
decodeURI() 解码某个编码的 URI。

decodeURIComponent() 解码一个编码的 URI 组件。

encodeURI() 把字符串编码为 URI。

encodeURIComponent() 把字符串编码为 URI 组件。

escape() 对字符串进行编码。

eval() 计算 JavaScript 字符串，并把它作为脚本代码来执行。

isFinite() 检查某个值是否为有穷大的数。

isNaN() 检查某个值是否是数字。

Number() 把对象的值转换为数字。

parseFloat() 解析一个字符串并返回一个浮点数。

parseInt() 解析一个字符串并返回一个整数。

String() 把对象的值转换为字符串。

unescape() 对由 escape() 编码的字符串进行解码。

36. js设计模式

1) 单例模式
保证一个类只有一个实例，并提供一个访问它的全局访问点。也就是说，第二次使用同一个类创建新对象的时候，应该得到与第一次创建的对象完全相同的对象。
class SingleCase {
    show() {
        console.log('我是一个单例对象')
    }
    static getInstance() {
        // 判断是否已经new过1个实例
        if (!SingleCase.instance) {
            // 若这个唯一的实例不存在，那么先创建它
            SingleCase.instance = new SingleCase()
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return SingleCase.instance
    }
}
const s1 = SingleCase.getInstance()
const s2 = SingleCase.getInstance()
s1 === s2    // true

2) 工厂模式 主要思想就是将对象的创建与对象的实现分离。

3) 策略模式 封策略，暴露上下文。主要是将之前的if else 封装成策略，进行调用
访问者只能访问上下文函数

const StrategyMap = {}
function context(type, ...rest) {
    return StrategyMap[type] && StrategyMap[type](...rest)
}
StrategyMap.minus100_30 = function(price) { 
    return price - Math.floor(price / 100) * 30
}
context('minus100_30', 270)   

4) 代理模式: 为目标对象创造了一个代理对象，以控制对目标对象的访问。
优点是: 在调用目标对象前和调用后进行一些预操作和后操作，从而实现新的功能或者扩展目标的功能。
例子:
导演/法院（访问者）对明星/当事人（目标）的访问都是通过经纪人/律师（代理）来完成；
经纪人/律师（代理）对访问有过滤的功能；

37. CSS3新增属性用法整理：
1、box-shadow（阴影效果）
2、border-color（为边框设置多种颜色）
3、border-image（图片边框）
4、text-shadow（文本阴影）
5、text-overflow（文本截断）
6、word-wrap（自动换行）
7、border-radius（圆角边框）
8、opacity（透明度）
9、box-sizing（控制盒模型的组成模式）
10、resize（元素缩放）
11、outline（外边框）
12、background-size（指定背景图片尺寸）
13、background-origin（指定背景图片从哪里开始显示）
14、background-clip（指定背景图片从什么位置开始裁剪）
15、background（为一个元素指定多个背景）
16、hsl（通过色调、饱和度、亮度来指定颜色颜色值）
17、hsla（在hsl的基础上增加透明度设置）
18、rgba（基于rgb设置颜色，a设置透明度）

38. 常见的不支持冒泡事件
妈（mouseenter）妈(mouseleave)不(blur)放(focus)心你(load,unload,resize)
①focus
②blur
③mouseenter
④mouseleave
⑤load
⑥unload
⑦resize

39. css内联元素的置换与不可置换
置换元素(替换元素)和非置换元素(不可替换元素)：
①置换元素: 一个内容不受CSS视觉格式化模型控制，CSS渲染模型不考虑对其内容的渲染，且元素本身一般拥有固有尺寸（宽度，高度，宽高比）的元素，被称之为置换元素。
浏览器会根据元素的标签和属性，来决定置换元素的具体显示内容。它们所具有的特征为：在不使用css修饰时，元素的标签和属性也会影响元素的显示。

例如，浏览器会根据<img>标签的src属性的值来读取图片信息并显示出来，而如果查看(x)html代码，则看不到图片的实际内容；<input>标签的type属性决定是显示输入框，还是单选按钮等。

html(5)中的置换元素有 <img>、<input>、<textarea>、<select>、<object>、<button>、<iframe> 和 <canvas> 等。
置换元素在其显示中生成了框，这就是有些内联元素能够设置宽高的原因。

②非置换元素
html 的大多数元素是非置换元素，除置换元素之外，所有的元素都是非置换元素。非置换元素内容直接表现给浏览器。例如：<label>label中的内容</label> 标签<label>是一个非置换元素，文字“label中的内容”将全被显示。
块级元素/行内元素的宽高和边距设置问题：
块级元素可以设置宽度(width)、高度(height)、内边距(padding)和外边距(margin)。
行内置换元素可以设置宽度(width)、高度(height)、内边距(padding)和外边距(margin)。
行内非置换元素可以设置左右内边距(padding-right/padding-left)和左右外边距(margin-right/margin-left)。

40. JS String与Array
'1,2,3'.split() =>无分割函数 结果 ['1,2,3']
'1,2,3'.split('') =>以空分割函数,全部拆分 结果 ['1',',','2',',','3']
'1,2,3'.split(',') =>以逗号分割函数 结果 ['1','2','3']

['1','2','3'].join() =>不提供参数默认逗号分隔 结果 '1,2,3'
['1','2','3'].join('') =>空分隔 结果 '123'
['1','2','3'].join('|') =>空分隔 结果 '1|2|3'

41. ES6 模块与 CommonJS 模块的差异 ES6 模块与 CommonJS 模块的差异 

CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。

42. 性能优化

前端性能优化分为两类，一类是文件加载更快，另一类是文件渲染更快。
加载更快的方法：
• 让传输的数据包更小（压缩文件/图片）：图片压缩和文件压缩
• 减少网络请求的次数：雪碧图/精灵图、节流防抖
• 减少渲染的次数：缓存（HTTP缓存、本地缓存、Vue的keep-alive缓存等）
渲染更快的方法：
• 提前渲染：ssr服务器端渲染
• 避免渲染阻塞：CSS放在HTML的head中 JS放在HTML的body底部
• 避免无用渲染：懒加载
• 减少渲染次数：对dom查询进行缓存、将dom操作合并、使用减少重排的标签
加分回答
雪碧图的应用场景一般是项目中不常更换的一些固定图标组合在一起，比如logo、搜索图标、切换图标等。
电商项目中最常用到的懒加载，一般在查看商品展示的时候通常下拉加载更多，因为商品数据太多，一次性请求过来数据太大且渲染的时间太长。
延伸阅读
雪碧图/精灵图
• 雪碧图/精灵图：多张图标合并在一张大图中
• 使用方法
1. 引入图片
2. 通过背景定位具体图标
• 优化方式
o 减少加载网页图片时服务器的请求次数
可以合并多数背景图片和小图标，方便在任何位置使用，这样不同位置的请求只需要调用一个图片，从而减少对服务器的请求次数， 降低服务器压力，同时提高了页面的加载速度，节约服务器的流量。
ssr服务器端渲染
1. CSR是Client Side Render简称；页面上的内容是我们加载的js文件渲染出来的， js文件运行在浏览器上面，服务端只返回一个html模板。
2. SSR是Server Side Render简称；页面上的内容是通过服务端渲染生成的，浏览器直接显示服务端返回的html就可以了。
• 优化方式：减少网络传输：响应快，用户体验好，首屏渲染快，对搜索引擎友好，搜索引擎爬虫可以看到完整的程序源码，有利于SEO.
缓存
• http缓存：不需要通过服务器传输数据，直接从http缓存中获取
o 协商缓存
o 强制缓存
• 本地缓存：
o localstorage：把一般不需要变动的大型数据存储在localstorage中，打开页面判断localstorage中是否有该数据，有就直接从浏览器中获取
• 优化方式：
o 减少网络传输的次数
css和js文件的位置
1.  css写在head中：css放在body标签尾部时, DOMTree构建完成之后便开始构建RenderTree, 并计算布局渲染网页,等加载解析完css之后, 开始构建CSSOMTree, 并和DOMTree重新构建RenderTree重新计算布局渲染网页，css放在head标签中时, 先加载css, 之后解析css构建CSSOMTree, 于此同时构建DOMTree,CSSOMTree和DOMTree都构建完毕之后开始构建RenderTree, 计算布局渲染网页

2.  js写底部：JavaScript时会阻止其他内容的下载，要等到JS文件下载解析完之后才会显示网页内容。若JS文件很大放在前面就会导致加载时间较长，网页会一直白屏。因为JS一般会涉及到一些DOM操作，所以要等全部的dom元素都加载完再加载JS。
js文件放在头部如图：


js文件放在body底部如图：

懒加载
• 方法：默认进入页面只展示首屏能够展示的内容，当滚动条拉动到页面底部继续拉动再进行数据加载和渲染
• 优化方法：
o 减少不必要的数据传输和渲染
o 使页面渲染更快


对dom查询进行缓存
• 每次查询dom元素都需要遍历，将查询结果缓存起来
// 不缓存DOM查询结果
for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
// 每次循环，都会计算length，频繁进行DOM查询
// 缓存DOM查询结果
const pList = document.getElementsByTagName('p')
const length = pList.length
for (let i = 0; i < length; i++) {
// 缓存length，只进行一次DOM查询
}
• 优化方式：减少相同运算的运算次数
将dom操作合并
• 多次dom操作合并成一次
• 优化方式：减少dom渲染的次数

// 未合并
const listNode = document.getElementById('list')
// 执行插入
for (let i = 0; i < 10; i++) {
const li = document.createElement('li')
li.innerHTML = 'list item ' + i
// 创建一个插入一个
listNode.appendChild(frag)
}
// 合并
const listNode = document.getElementById('list')
// 创建一个文档片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment()
// 执行插入
for (let i = 0; i < 10; i++) {
const li = document.createElement('li')
li.innerHTML = 'list item ' + i
frag.appendChild(li)
}
// 都完成之后，再插入到DOM树中
listNode.appendChild(frag)
节流和防抖
• 限制用户疯***作，但是事件处理程序设置规定时间内进行响应
• 节流（Throttle）函数： 对于持续的事件触发，每达到固定时间间隔，执行事件处理函数


• 防抖（Debounce）函数: 事件触发停止后开始计时，在固定时间内不再有事件触发，执行事件处理函数

43. 前端比较关心的是 性能、网络、安全以及如何更深入的参加到业务当中理解业务

44. disabled 与readonly

disabled: 作用于所有的表单元素 阻止对元素的一切操作 表单元素的值无法被提交。
Readonly : 只针对input(text / password)和textarea有效; 将元素设置为只读，可以获取焦点、失去焦点
表单不影响提交

45. js
注意：NaN与任何值都不相等（包括自身）。另外，正0等于负0

非相等运算符(> , < )
(1)字符串的比较: 两个都是字典 按照字典顺序
(2)至少有一个不是字符串
<1> 原始类型值 转成数值比较Number()函数转  -> Number('')为0,其他转字符串都是NaN
任何值（包括NaN本身）与NaN使用非相等运算符进行比较，返回的都是false。
<2> 运算子是对象，会转为原始类型的值，再进行比较。
先调用valueOf方法；如果返回的还是对象，再接着调用toString方法

相等运算符 ==
原始类型值: 原始类型的值会转换成数值再进行比较

对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较。
具体来说，先调用对象的valueOf()方法，如果得到原始类型的值，就按照上一小节的规则，互相比较；如果得到的还是对象，则再调用toString()方法，得到字符串形式，再进行比较。 undefined == null // true

46. Ajax : JavaScript 脚本发起 HTTP 通信

主要步骤:
创建 XMLHttpRequest 实例
发出 HTTP 请求
接收服务器传回的数据
更新网页数据

常见属性:

XMLHttpRequest.readyState
XMLHttpRequest.readyState返回一个整数，表示实例对象的当前状态。该属性只读。它可能返回以下值。
0，表示 XMLHttpRequest 实例已经生成，但是实例的open()方法还没有被调用。
1，表示open()方法已经调用，但是实例的send()方法还没有调用，仍然可以使用实例的setRequestHeader()方法，设定 HTTP 请求的头信息。
2，表示实例的send()方法已经调用，并且服务器返回的头信息和状态码已经收到。
3，表示正在接收服务器传来的数据体（body 部分）。这时，如果实例的responseType属性等于text或者空字符串，responseText属性就会包含已经收到的部分信息。
4，表示服务器返回的数据已经完全接收，或者本次接收已经失败。
通信过程中，每当实例对象发生状态变化，它的readyState属性的值就会改变。这个值每一次变化，都会触发readyStateChange事件。

XMLHttpRequest 的实例方法
XMLHttpRequest.open() : 指定 HTTP 请求的参数

void open(
   string method,
   string url,
   optional boolean async, 是否异步
   optional string user, 认证的用户名，默认为空字符串。该参数可选
   optional string password 认证的密码，默认为空字符串。该参数可选
);

47. css transition(过渡)和 animation(动画)
简单情况考虑transition ;自由一点或者复杂的可以用animation

CSS transition 强调的是单一动画属性的过度效果,其过程是简单的，由开始到结束的过程，中间不存在可能的动画转折，只有0到1，比喻：渐隐，渐显;

CSS animation 
表现形式: 使用 @keyframes 规则 在产生效果的盒子里定义 animation:规则
强调的是多种动画属性的结合，按时间轴线出现周折性动画变换的动画过程，其过程是复杂的，由开始——>结束的过程中，存在可能的动画转折，其过程可能是开始—0—1—2—3>结束的过程


48. translate和position区别
translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。

49. 路由模式的对比
hash模式:
原理: 在 url 中的 # 之后对应的是 hash 值, 其原理是通过hashChange() 事件监听hash值的变化, 根据路由表对应的hash值来判断加载对应的路由加载对应的组件
优点:
(1) 只需要前端配置路由表, 不需要后端的参与
(2) 兼容性好, 浏览器都能支持
(3) hash值改变不会向后端发送请求, 完全属于前端路由
缺点:
(1) hash值前面需要加#, 不符合url规范,也不美观

history模式:
原理:
优点:
(1) 符合url地址规范, 不需要#, 使用起来比较美观
缺点:
(1) 在用户手动输入地址或刷新页面时会发起url请求, 后端需要配置index.html页面用户匹配不到静态资源的情况, 否则会出现404错误
(2) 兼容性比较差, 是利用了 HTML5 History对象中新增的 pushState() 和 replaceState() 方法,需要特定浏览器的支持.
ddd

