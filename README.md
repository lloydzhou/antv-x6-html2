# antv-x6-html2

another `@antv/x6`` html shape, using `single-spa` life cycle hook.  

扩展`@antv/x6`内置`html`节点，使用类似`single-spa`的生命周期钩子  

1. 这里参照`single-spa`的接口，只使用了其中的`mount`+`unmount`，这样抽象带来的好处不仅限于`react`/`vue`，也可以使用其他框架实现自定义节点
2. 不管用户使用什么框架实现自定义节点，都可以在传递进来的`mount`函数里面拿到`node`监听`change:data`事件更新自己的UI，实现一些自定义的交互逻辑
3. 这里注册的`HTML2.View`(`html2-view`)针对一些可点击的html组件屏蔽了`onMouseUp`+`onMouseDown`避免这两个事件触发`x6`内部的选择和拖拽逻辑

## 第三方集成

### [antv-x6-react](https://github.com/lloydzhou/antv-x6-react)
1. 将x6的各种`shape`注册成原生的`vue`组件使用（核心思想是把x6退化成一个`view`开发者自己处理数据扭转）
2. 同时支持使用`react`自定义节点（内部有使用一个`DateWatcher`自动监听`change:data`）
3. 初始版本是使用`@antv/x6-react-shape`来自定义节点，但是后来换成使用`antv-x6-html2`
4. 内置一个默认的Portal，会在`Portal.getProvider()`返回的这个组件挂载的时候，自动使用portal渲染所有的自定义组件
5. 有实现一些常用的组件`Background`, `Clipboard`, `Grid`, `Mousewheel`, `Selection`, `Snapline`, `MiniMap`, `ContextMenu`等widgets

#### online demos
1. [基础示例](https://codesandbox.io/s/antv-x6-react-demo-jjvcv0)使用了`antd`的`InputNumber`（一个带按钮的输入框）展示了自定义组件如何做到和x6做数据交互
2. [swimlane 泳道图](https://codesandbox.io/s/antv-x6-react-swimlane-uy01jp)参照`x6`官方示例实现
3. [DAG画布](https://codesandbox.io/s/antv-x6-react-dag-m8vcgb)参照`x6`官方的DAG示例实现`AlgoNode`的节点逻辑与官方示例相比较处理起来更简单
4. [ER图](https://codesandbox.io/s/antv-x6-react-er-demo-61m60o)参照`x6`官方的ER图示例
5. [展开收起树形图](https://codesandbox.io/s/antv-x6-react-expand-tree-jfrnnz)参照`x6`官方的示例


## TODO
### [antv-x6-vue](https://github.com/lloydzhou/antv-x6-vue)
1. 这个库实现的功能和[antv-x6-react](https://github.com/lloydzhou/antv-x6-react)基本一致
2. 当前还是使用`@antv/x6-vue-shape`实现的，后续也会切换到`antv-x6-html2`这边



