1. 对Fiber架构的理解
React 15 的 StackReconciler 方案由于递归不可中断问题，如果 Diff 时间过长（JS计算时间），会造成页面 UI 的无响应的表现，vdom 无法应用到 dom 中。
为了解决这个问题，React 16 实现了新的基于 requestIdleCallback 的调度器（因为 requestIdleCallback 兼容性和稳定性问题，自己实现了 polyfill），通过任务优先级的思想，在高优先级任务进入的时候，中断 reconciler。为了适配这种新的调度器，推出了 FiberReconciler，将原来的树形结构（vdom）转换成 Fiber 链表的形式（child/sibling/return），整个 Fiber 的遍历是基于循环而非递归，可以随时中断。

2. react 获取state的值
setstate添加回调

setState是一个异步的过程，使用setState设置了state中的某一个属性property的值之后，马上取this.state.property并不会得到刚刚设置的值。如果setState第一个参数是callback的话，callback的第一个参数是上一次setState的值，这样每次setState内部的赋值关系都是异步的，都会依赖上一次的求值，使赋值更加可靠、稳定.通过 prevState是上一次渲染的state
 this.setState(prevState => ({
                ...
            }))

3. react中的setState是同步还是异步的
由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 。
React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等。

在 onClick、onFocus 等事件中，由于合成事件封装了一层，所以可以将 isBatchingUpdates 的状态更新为 true；在 React 的生命周期函数中，同样可以将 isBatchingUpdates 的状态更新为 true。那么在 React 自己的生命周期事件和合成事件中，可以拿到 isBatchingUpdates 的控制权，将状态放进队列，控制执行节奏。而在外部的原生事件中，并没有外层的封装与拦截，无法更新 isBatchingUpdates 的状态为 true。这就造成 isBatchingUpdates 的状态只会为 false，且立即执行。所以在 addEventListener 、setTimeout、setInterval 这些原生事件中都会同步更新。

setState():setState(object nextState[, function callback])
● nextState，将要设置的新状态，该状态会和当前的state合并
● callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。

4. react 合成事件
目的在于：消除浏览器的兼容，包装了原生事件，可以进行跨浏览器开发.
事件名称采用小驼峰，而原生事件是纯小写

5. react生命周期(挂载、更新、卸载)
● 挂载过程：
  ○ constructor
  ○ getDerivedStateFromProps
  ○ render
  ○ componentDidMount
● 更新过程：
  ○ getDerivedStateFromProps
  ○ shouldComponentUpdate
  ○ render
  ○ getSnapshotBeforeUpdate
  ○ componentDidUpdate
● 卸载过程：
  ○ componentWillUnmount