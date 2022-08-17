# react 入门

## jsx

### 语法规则

1. 定义虚拟DOM，不要写引号
2. 标签混入js表达式用{}
3. 样式类型用className
4. 内联样式，style={{key:value}}
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母
   1. 若小写字母开头，则将标签转化为html中同名元素，若html中没有对应元素则报错
   2. 若大写字母开头，react去渲染对应的组件，若组件没有定义则报错

注意区分：js语句和js表达式
  表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
        例子：
          1) a
          2) a+b
          3) demo(1)
          4) arr.map()
          5) function test()
  语句：
        例子：
          1) if(){}
          2) for(){}
          3) switch(){}

## 模块与组件

### 模块

1 理解：向外提供特定功能的js程序，一般是<strong>js文件</strong>
2 为什么要拆成模块：随着业务逻辑的增加，代码越来越多而且复杂
3 作用：复用js，简化js，提高js运行效率
按功能划分

### 组件

1 定义：用来实现局部功能效果的代码和资源的集合
2 为什么：一个复杂界面的功能太多
3 作用：复用编码，简化项目编码，提高运行效率
按视图划分

### 模块化

当应用的js都以模块来编写，这个应用就是一个模块化的应用

### 组件化

当应用是多组件方式开发，这个应用就是一个组件化的应用

#### 函数式组件

#### 类式组件

ReactDOM.render()之后发生了什么？
1.React解析组件标签，找到对应组件
2.如果是类组件，new出来一个实例，并通过实例调用到原型上的render
3.将render返回的结果传给虚拟DOM，随后呈现在页面。

### 工程化

函数式组件：函数定义的组件（适用于简单组件的定义）
类式组件：类定义（适用复杂组件）

## 组件实例的三大核心属性

1. state
   理解：
      - state是组件对象最重要的属性，值是对象
      - 通过更新组件state来更新对应的页面显示（重新渲染）
   注意：
      - 组件中的render的this为组件实例对象
      - 组件自定义的方法this为undefined
      - 状态中的数据不可以直接更改，要借助一个内置的API去更改

总结：

```JS
class Whether extends React.component{
  // 构造器调用一次
  //  constructor(props){
  //      super(props)
  //  }
  this.state = {isHot: false};
  //  render调用 1+n 次，n：状态更改的次数
   render(){
     const {isHot} = this.state;
     return (<h1 onClick={this.change}>{isHot ? '炎热' : '凉爽'}</h1>)
   }
  //  change调用 n 次，n：调用的次数
  // 普通函数 this<=>undefined 
  // 箭头函数 this<=>组件的实例对象
  // 自定义方法
   change = ()=>{
      const isHot = this.state.isHot;
      // ！！！状态不可直接更改，
      // ！！！状态必须通过setState更新，且更新是一种合并，不是替换
      this.setState({isHot: !isHot}) 
   }
}
```

1. props
2. refs 和事件
