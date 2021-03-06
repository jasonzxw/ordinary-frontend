1. 选择器类型
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

.marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。
p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。

2. 选择器的优先级
内联样式 1000 > id 选择器 100> 类选择器 = 伪类选择器 = 属性选择器 10> 标签选择器 = 伪元素选择器 1
!important > 行内样式 > #id > .class > tag > * > 继承 > 默认
一般来说选择器都有权值，权值大的优先，权值相等时后出现的样式表由于先出现的样式表

3. Text(文本)
text-transform：转换文本大小写 ， text-align：文本对齐方式
letter-spacing 调节字符间距:对于英文，调节每个字母与每个字母的间距，对于汉字，调节每个汉字与每个汉字的间距
word-spacing 调节词间距:对于英文，调节每个单词与每个单词的间距，对于汉字，无法自动解析，需要在文本中将其已空格隔开

4. border(边框)
border: 1px solid red => border-style,border-width,border-color
上右下左 上(左右)下 (上下)(左右)

5. margin 、padding
margin 是指从自身边框到另一个容器边框之间的距离，就是容器外距离。(外边距)
padding 是指自身边框到自身内部另一个容器边框之间的距离，就是容器内距离。(内边距)

6. css 尺寸
可以设置max、min 或者正常width和height

7. display
可以转变正常的块和内联元素的展示
可以决定元素的展示与否：display:none 元素不展示且不会占用空间；visibility:hidden可以隐藏某个元素，仍占用空间

8. Overflow
visible：默认值。内容不会被修剪，会呈现在元素框之外
hidden：内容会被修剪，并且其余内容是不可见的
scroll：内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容  
auto：如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容
inherit：规定应该从父元素继承 overflow 属性的值

9. !important
当两条相互冲突的带有 !important 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用

10. CSS3

边框
border-radius：边框添加圆角 box-shadow：添加阴影
利用border-radius画圆：
div:  {width:100px;
		 height:100px;
         border:3px solid red;
	     border-radius: 50%;}

文本效果
word-wrap: 文本较长，是否换行  text-overflow：文本溢出如何处理

2D转换
translate(x,y)左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动
rotate():在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转
scale(x,y):该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数
其中translate和scale 可以单独设置对X轴或者Y轴的转换

过渡：从一种样式转变到另一种样式
transition
transitions提供了一种在更改CSS属性时控制动画速度的方法。 其可以让属性变化成为一个持续一段时间的过程，而不是立即生效的。比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS transitions 后该元素的颜色将逐渐从白色变为黑色，按照一定的曲线速率变化。这个过程可以自定义。重点在于CSS属性的变化，让变化肉眼可见,不是立马变化的。

动画
@keyframes 指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式
animation: name(动画名称) duration(时间) timing-function(如何完成一个周期) delay iteration-count(播放次数) direction(是否应该轮流反向播放动画) fill-mode play-state;

区别：
animation不需要触发事件，transition需要触发事件
transition只有一组关键帧（两个：开始-结束），动画可以设置多个

11. flex
Flex 布局的元素，称为 Flex 容器
容器的属性有：
flex-direction属性决定主轴的方向（即项目的排列方向）。 强调排列方向
flex-direction: row | row-reverse | column | column-reverse

flex-wrap属性定义，如果一条轴线排不下，如何换行
flex-wrap: nowrap | wrap | wrap-reverse;

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

justify-content属性定义了项目在主轴上的对齐方式。
justify-content: flex-start | flex-end | center | space-between | space-around;

align-items属性定义项目在交叉轴上如何对齐。
align-items: flex-start | flex-end | center | baseline | stretch;

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

容器成员，称为 Flex 项目（flex item），简称"项目"。
项目的属性有：

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间(main size)默认值为auto，即项目的本来大小

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
flex:auto = flex:1 1 auto   flex:none= flex:0 0 auto

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
align-self: auto | flex-start | flex-end | center | baseline | stretch;

当一个元素同时被设置了 flex-basis (除值为 auto 外) 和 width (或者在 flex-direction: column 情况下设置了height) , flex-basis 具有更高的优先级.

flex-grow 项在 flex 容器中分配剩余空间的相对比例。 主尺寸是项的宽度或高度，这取决于flex-direction值。
剩余空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow 定义的比例进行分配

12. grid布局

居中的实现、多栏自适应的实现、tooltip


css selector dictionary

background-origin 规定了指定背景图片background-image 属性的原点位置的背景相对区域
border-box | padding-box | content-box xxx区域，例如content内容区域填充

background-repeat CSS 属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复

边界border和轮廓outline很相似。然而轮廓在以下方面与边界不同
轮廓不占据空间，他们在元素内容之外绘制
根据规范，轮廓不必为矩形，尽管通常是矩形

border-radius 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个(椭)圆与边框的交集形成圆角效果

clip-path:使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。
inset()定义矩形 circle()定义一个圆形（使用一个半径和一个圆心位置）
ellipse()定义一个椭圆（使用两个半径和一个圆心位置）。 polygon() 定义一个多边形（使用一个 SVG 填充规则和一组顶点）。 path() 定义一个任意形状（使用一个可选的 SVG 填充规则和一个 SVG 路径定义）

cursor CSS 属性设置光标的类型（如果有），在鼠标指针悬停在元素上时显示相应样式。

:first @page CSS 伪类选择器 描述的是：打印文档的时候，第一页的样式。

:first-child CSS pseudo-class 表示在一组兄弟元素中的第一个元素。
:last-child CSS 伪类 代表父元素的最后一个子元素。


font-size属性的em和ex单位值相对于父元素的字体大小,流行的技巧是设置body元素的字体大小为62.5% (即默认大小16px的62.5%)，等于10px。现在你可以通过计算基准大小10px的倍数

left属性定义了定位元素的左外边距边界与其包含块左边界之间的偏移，非定位元素设置此属性无效。
当position设置为absolute或fixed时，left属性指定了定位元素左外边距边界与其包含块左边界之间的偏移。
当position设置为relative时，left属性指定了元素的左边界离开其正常位置的偏移。
当position设置为sticky时，如果元素在viewport里面，left属性的效果和position为relative等同；如果元素在viewport外面，left属性的效果和position为fixed等同。
当position设置为static时，left属性无效

min-width 属性为给定元素设置最小宽度。它可以阻止 width 属性的应用值小于 min-width 的值。min-width 的值会同时覆盖 max-width 和 width

:nth-child(an+b) 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...）

:nth-last-child() 这CSS伪类从兄弟节点中从后往前匹配处于某些位置的元素作为一个模式，从后往前匹配元素

opacity: 透明度 0完全透明 1 完全透明

CSS的rotate()函数定义了一种将元素围绕一个定点（由transform-origin属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转180°也被称为点反射
元素旋转的固定点 - 如上所述 - 也称为变换原点。这默认为元素的中心，但你可以使用transform-origin属性设置自己的自定义变换原点

scaleX(sx) 是 scale(sx, 1) 或 scale3d(sx, 1, 1) 的一个速记/缩写。

text-align CSS属性定义行内内容（例如文字）如何相对它的块父元素对齐。text-align 并不控制块元素自己的对齐，只控制它的行内内容的对齐

transform-origin CSS属性让你更改一个元素变形的原点。

transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay的一个简写属性

user-select 控制用户能否选中文本

visibility 显示或隐藏元素而不更改文档的布局。该属性还可以隐藏<table>中的行或列

