1. javascript 基本组成
基本语法、标准库、浏览器api、DOM

2. 变量提升
JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部。

3. 数据类型
primitive type : string 、 number 、boolean
complex type: object(function、array 、object)
special type: null 、undefined 、 symbol

boolean 转换规则： JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值
undefined 、null、false 、0 、NAN、'' 、这六个被视作false,其余都是true

<1>数值
几乎所有场合，正零和负零都会被当作正常的0 ;唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的
NaN不等于任何值，包括它本身。 (-1 / -0) > (1 / -0) true
[1,2,3]..map(parseInt)  => [1,NaN,NaN] => [parseInt(1,0),parseInt(2,1),parseInt(3,2)]
parseInt(param,radio) radio=>进制(2,36)如果为0,默认十进制 第二个参数是0、undefined和null，直接忽略。

<2> 字符串
base64转码： atob()任意值转base64编码 btoa() base64编码转原来的值 ，不支持非ASCLL字符

<3> 对象
对象引用：不同的变量名指向同一个对象，那么它们都是这个对象的引用；修改其中一个变量，会影响到其他所有变量  重要：取消某一个变量对于原对象的引用，不会影响到另一个变量

<4> 函数
函数提升：主要是采用function命令声明函数时，函数像变量声明提升到代码头部，优先级比变量还高 ；如果使用赋值函数则不会出现这样的情况
作用域： 作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关
闭包： 定义在函数内部的子函数，可以记住它的诞生环境

4. 数据类型转换
Number函数将字符串转为数值，要比parseInt函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为NaN。

错误类型
SyntaxError 对象： 解析代码时发生的语法错误。
ReferenceError对象： 是引用一个不存在的变量时发生的错误
RangeError对象：是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值
TypeError对象： 是变量或参数不是预期类型时发生的错误
URIError对象： 是 URI 相关函数的参数不正确时抛出的错误
EvalError 对象：eval函数没有被正确执行时，会抛出EvalError错误

5. 标准库

<1> Object
Object.preventExtensions(): 不可添加新的对象属性
Object.seal()： 不可添加新的对象属性也不可删除旧的对象属性
Object.freeze()：使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量

<2> Array
push() 、pop() : 在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度 、删除数组的最后一个元素，并返回该元素
shift()，unshift(): 删除数组的第一个元素，并返回该元素、在数组的第一个位置添加元素，并返回添加新元素后的数组长度
join():指定参数作为分隔符，将所有数组成员连接为一个字符串返回,不指定参数，将返回原数组.toString()
reverse():颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。
sort():对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
forEach():方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用for循环
filter()方法用于过滤数组成员，满足条件的成员组成一个新数组返回。不会改变原数组
reduce()：用来累计变量比较好用,接受四个参数
累积变量。第一次执行时，默认为数组的第一个成员；以后每次执行时，都是上一轮的返回值。(必须)
当前变量。第一次执行时，默认为数组的第二个成员；以后每次执行时，都是下一个成员。(必须)
当前位置。一个整数，表示第二个参数（当前变量）的位置，默认为1。(可选)
原数组。(可选)

<3> String
split():
省略参数，则返回数组的唯一成员就是原字符串
分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。

<4>RegExp
RegExp.prototype.test():返回一个布尔值，表示当前模式是否能匹配参数字符串
RegExp.prototype.exec(): 正则对象匹配成功，返回一个数组，成员是匹配结果
如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推

点字符. 匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符
位置字符： ^ 表示字符串的开始位置 ， $ 表示字符串的结束位置
竖线符号（|）在正则表达式中表示“或关系”
转义字符：正则表达式中，需要反斜杠转义的，一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\
字符类： [xyz] 表示x、y、z之中任选一个匹配 、 脱字符（^）: 除了字符类之外的字符
连字符：连续序列的字符，连字符（-）用来 [a-z]、[0-9]
预定义模式指的是某些常见模式的简写方式：
\d 匹配0-9之间的任一数字，相当于[0-9]。
\D 匹配所有0-9以外的字符，相当于[^0-9]。
\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
\W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
\S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
\b 匹配词的边界。
\B 匹配非词边界，即在词的内部

重复类:大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次
量词符:用来设定某个模式出现的次数 , 尽可能多的匹配，贪婪模式
? 问号表示某个模式出现0次或1次，等同于{0, 1}。
* 星号表示某个模式出现0次或多次，等同于{0,}。
+ 加号表示某个模式出现1次或多次，等同于{1,}。

非贪婪模式，次数最少匹配
+?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
*?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
??：表格某个模式出现0次或1次，匹配时采用非贪婪模式

组匹配：正则表达式的括号表示分组匹配，括号中的模式可以用来匹配分组的内容

<5> Json
1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
2. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。
字符串必须使用双引号表示，不能使用单引号。
3. 对象的键名必须放在双引号里面。
4. 数组或对象最后一个成员的后面，不能加逗号

<6> Date
Date.now(): 返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数
Date.parse(): 用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数
Date.UTC():接受年、月、日等变量作为参数，返回时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数
Date.prototype.valueOf() 和 getTime 效果一样，返回距离时间零点的毫秒数
toUTCString(): 对应的 UTC 时间，也就是比北京时间晚8个小时 Sat, 16 Apr 2022 13:31:17 GMT
toISOString()、toJSON() : 返回UTC 时区的时间 2012-12-31T16:00:00.000Z

Date 实例转为表示本地时间的字符串
toLocaleString():完整的本地时间
toLocaleDateString()：本地日期(不含小时、分和秒)
toLocaleTimeString()：本地时间(不含年月日)

除了日期默认值从1开始，其他都是从0开始
6. 面向对象编程

(1) new原理
创建一个空对象，作为将要返回的对象实例。
将这个空对象的原型，指向构造函数的prototype属性。
将这个空对象赋值给函数内部的this关键字。
开始执行构造函数内部的代码。
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

(2) this的指向
this是动态的，与运行时的上下文有关。
使用场合：
全局环境this === window
构造函数this：指的是实例对象
对象方法this：指的是运行时的上下文对象 this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。

this的绑定
call():参数为空、null和undefined，则默认传入全局对象。
apply(): 接收一个数组作为函数执行时的参数
bind()方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。

Object.create():接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性
想要生成一个不继承任何属性（比如没有toString()和valueOf()方法）的对象，可以将Object.create()的参数设为null

7. 异步编程
setTimeout: 回调函数是对象的方法，那么setTimeout使得方法内部的this关键字指向全局环境，而不是定义时所在的那个对象,解决办法bind对象或者放入函数中调用
setTimeout(f, 0)会在下一轮事件循环一开始就执行。

8. DOM：最小组成单位叫节点
节点的类型有七种。
Document：整个文档树的顶层节点
DocumentType：doctype标签（比如<!DOCTYPE html>）
Element：网页的各种HTML标签（比如<body>、<a>等）
Attr：网页元素的属性（比如class="right"）
Text：标签之间或标签包含的文本
Comment：注释
DocumentFragment：文档的片段

Node
Node.prototype.appendChild():
一个节点对象作为参数，将其作为最后一个子节点，插入当前节点 ; 参数节点是 DOM 已经存在的节点，appendChild()方法会将其从原来的位置，移动到新位置

节点集合
NodeList(类数组对象)：包含各种类型的节点  HTMLCollection：只能包含 HTML 元素节点

document：节点代表整个文档
获取方法：
正常的网页，直接使用document或window.document。
iframe框架里面的网页，使用iframe节点的contentDocument属性。
Ajax 操作返回的文档，使用XMLHttpRequest对象的responseXML属性。
内部节点的ownerDocument属性

document.documentElement 当前文档的根元素节点,一般是html
scrollingElement:文档滚动元素一般是根元素。返回文档顶部=>document.scrollingElement.scrollTop=0

document.readyState属性返回当前文档的状态，共有三种可能的值。
loading：加载 HTML 代码阶段（尚未完成解析）
interactive：加载外部资源阶段
complete：加载完成
这个属性变化的过程如下。
浏览器开始解析 HTML 文档，document.readyState属性等于loading。
浏览器遇到 HTML 文档中的<script>元素，并且没有async或defer属性，就暂停解析，开始执行脚本，这时document.readyState属性还是等于loading。
HTML 文档解析完成，document.readyState属性变成interactive。
浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，document.readyState属性变成complete。 

元素获取
(1)querySelector() 返回匹配的第一个，querySelectorAll()返回所有匹配给定选择器的节点
(2)getElementsByTagName() 返回符合条件的所有元素
(3)getElementsByClassName() 返回一个类似数组的对象所有class名字符合指定条件的元素
(4)getElementById() 返回匹配指定id属性的元素节点

Element:文档元素组成的每个节点

Element.title属性用来读写当前元素的 HTML 属性title。该属性通常用来指定鼠标悬浮时弹出的文字提示框。

className值是一个字符串，每个class之间用空格分割。classList属性返回一个类似数组的对象，当前元素节点的每个class就是这个对象的一个成员。

innerHTML:该元素包含的所有 HTML 代码, outerHTML当前元素节点的所有 HTML 代码，包括该元素本身和所有子元素。

clientHeight: 元素节点的 CSS 高度（单位像素），只对块级元素生效，对于行内元素返回0 ,其中包括padding部分，但是不包括border、margin，如果有水平滚动条，还要减去水平滚动条。如果块级元素没有设置 CSS 高度，则返回实际高度
clientWidth: 返回元素节点的 CSS 宽度，同样只对块级元素有效，也是只包括元素本身的宽度和padding，如果有垂直滚动条，还要减去垂直滚动条的宽度
clientLeft: 左边框宽度
clientTop：顶部边框宽度

scrollHeight：属性返回一个整数值（小数会四舍五入），表示当前元素的总高度（单位像素），包括溢出容器、当前不可见的部分。它包括padding，但是不包括border、margin以及水平滚动条的高度（如果有水平滚动条的话），还包括伪元素（::before或::after）的高度。
scrollWidth属性表示当前元素的总宽度（单位像素）
重点：
// 返回网页的总高度
document.documentElement.scrollHeight
document.body.scrollHeight
元素节点的内容出现溢出，即使溢出的内容是隐藏的，scrollHeight属性仍然返回元素的总高度

scrollTop：表示当前元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0
scrollLeft属性表示当前元素的水平滚动条向右侧滚动的像素数量,scrollTop属性表示当前元素的垂直滚动条向下滚动的像素数量

offsetParent：返回最靠近当前元素的、并且 CSS 的position属性不等于static的上层元素。某个元素的所有上层节点的position属性都是static，则Element.offsetParent属性指向<body>元素

Element.offsetLeft返回当前元素左上角相对于Element.offsetParent节点的水平位移，
Element.offsetTop返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移。
算出元素左上角相对于整张网页的坐标
function getElementPosition(e) {
  var x = 0;
  var y = 0;
  while (e !== null)  {
    x += e.offsetLeft;
    y += e.offsetTop;
    e = e.offsetParent;
  }
  return {x: x, y: y};
}

9. 事件
EventTarget.addEventListener()：参数type, listener[, useCapture]
EventTarget.removeEventListener(): 与上面一致
EventTarget.dispatchEvent(): 参数Event实例

Event
Event.currentTarget：事件当前正在通过的节点正在执行的监听函数所在的那个节点。随着事件的传播，这个属性的值会变。
Event.target：事件的原始触发节点，属性不会随着事件的传播而改变。
Event.preventDefault()：取消浏览器对当前事件的默认行为，不会阻止事件的传播
Event.stopPropagation()：阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数
Event.stopImmediatePropagation()：阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点

鼠标事件
mousemove：当鼠标在一个节点内部移动时触发。当鼠标持续移动时，该事件会连续触发。为了避免性能问题，建议对该事件的监听函数做一些限定，比如限定一段时间内只能运行一次。
mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件（详见后文）。
mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件（详见后文）。
mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件（详见后文）。
mouseleave：鼠标离开一个节点时触发，离开父节点不会触发这个事件（详见后文）。

mouseover事件和mouseenter事件，都是鼠标进入一个节点时触发。两者的区别是，mouseenter事件只触发一次，而只要鼠标在节点内部移动，mouseover事件会在子节点上触发多次。
mouseout事件和mouseleave事件，都是鼠标离开一个节点时触发。两者的区别是，在父元素内部离开一个子元素时，mouseleave事件不会触发，而mouseout事件会触发。

键盘事件
keydown、keypress、keyup




