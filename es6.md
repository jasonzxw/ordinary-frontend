1. 变量声明的方式变化: 之前的var 变成 let const
区别在于：前者只存在全局以及函数作用域，后者有块级作用域；前者存在变量提升，后者在声明之前不可使用，会报错

2. 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。这也是react的hooks采用数组而不是对象结构

3. 变量类型
number、string、Boolean、object、symbol、undefined、null、bigint

4. 函数
函数参数的默认值最好是尾参数、要不然是无法看出来省略的
函数的length在有默认值的情况下会失真、不再计入参数个数
rest参数： 形如function(...rest){} rest是一个数组、将多于参数放入数组中
箭头函数：
没有自己的this对象，通常绑定在函数定义时普通函数的this => 没有this,不能用作构造函数
不可以当作构造函数，无法使用new命令
不可以使用arguments对象，在函数体内不存在，但是可以使用rest
不可以使用yield, 不能用作generator函数

5. 数组扩展运算符 ...
原理是内部存在Iterator 接口遍历器
Array.from 转化数组 包括：类似数组对象(array-like object) 和 可遍历(iterable)对象
Array.of 将一组值转换为数组 Array.of(1,2,3) => [1,2,3]
find 找出第一个符合条件的数组成员，否则返回undefined ; findIndex 返回第一个符合条件的数组成员位置，否则返回-1
forEach(), filter(), reduce(), every() 和some()都会跳过空位
map()会跳过空位，但会保留这个值
join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

6. 对象的扩展

for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
尽量不要用for...in循环，而用Object.keys()代替

super，指向当前对象的原型对象，只能用在对象的方法之中，用在其他地方都会报错。

7. symbol
symbol 值作为对象属性名时，不能用点运算符,点运算符后面总是字符串。
对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
Symbol 作为属性名，遍历对象的时候，该属性不会出现,可以使用Object.getOwnPropertySymbols()或者Reflect.ownKeys()获取

8. 
set 类似于数组，但是成员的值都是唯一 。构造函数接受数组或者有iterable接口作为参数
WeakSet：成员只能是对象，由于成员随时会被垃圾回收，所以不可遍历。
Map: Object提供了"字符串-值"的对应(key只能为字符串) , Map提供了"值-值"的对应,
Map键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键
WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

9. 
Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
所有的promise都变成fullfilled, 实例会变成fullfilled;有一个rejected,会变成rejected

Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
有一个实例状态发生改变，状态就就改变，传递给回调函数

Promise.allSettled() 等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。以数组返回
返回的新的 Promise 实例，一旦发生状态变更，状态总是fulfilled，不会变成rejected

Promise.any()
参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态

10. 
Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
原生具备 Iterator 接口的数据结构如下
Array Map Set String TypedArray 函数的 arguments 对象 NodeList 对象、Generator 对象

遍历器的本质上：创建指针对象，每次调用next()方法，指向下一个成员

11. Generator函数:本质是一个状态机，封装多个内部状态；执行函数会生成一个遍历器对象
遍历器对象的next方法的运行逻辑如下。
（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

重点：任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象
Generator.prototype.return():返回给定参数，并且终结遍历器

Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。

12. ES6 模块与 CommonJS 模块
CommonJS 模块输出的是一个值的拷贝，ES6 
ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段
