# antv-x6-html2
HTML components for building x6 editors

1. 这里参照single-spa的接口，只使用了其中的mount+unmount，这样抽象带来的好处不仅限于react/vue，也可以使用其他框架实现自定义节点
2. 不管用户使用什么框架实现自定义节点，都可以在传递进来的`mount`函数里面拿到`node`监听`change:data`事件更新自己的UI，实现一些自定义的交互逻辑
3. 这里注册的HTML2.View(html2-view)针对一些可点击的html组件屏蔽了`onMouseUp`+`onMouseDown`避免这两个事件触发`x6`内部的选择和拖拽逻辑

## 第三方集成

### [antv-x6-react](https://github.com/lloydzhou/antv-x6-react)
1. 将x6的各种`shape`注册成原生的`vue`组件使用
2. 同时支持使用`react`自定义节点（内部有使用一个`DateWatcher`自动监听`change:data`）
3. 初始版本是使用`@antv/x6-react-shape`来自定义节点，但是后来换成使用`antv-x6-html2`
4. 内置一个默认的Portal，会在`Portal.getProvider()`返回的这个组件挂载的时候，自动使用portal渲染所有的自定义组件
5. 有实现一些常用的组件`Background`, `Clipboard`, `Grid`, `Mousewheel`, `Selection`, `Snapline`, `MiniMap`, `ContextMenu`等widgets


## TODO
### [antv-x6-vue](https://github.com/lloydzhou/antv-x6-vue)
1. 这个库实现的功能和[antv-x6-react](https://github.com/lloydzhou/antv-x6-react)基本一致
2. 当前还是使用`@antv/x6-vue-shape`实现的，后续也会切换到`antv-x6-html2`这边



