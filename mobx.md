# mobx

mobx VS redux
1.代码层面
redux：需要写大量的模板代码，严格的工作流程
mobx：没有模板代码，书写起来简洁
2.数据方面
redux：数据不可变
mobx：数据是响应式的，可以直接修改数据
3.处理异步
redux：需要中间件处理异步（react-thunk、react-？）
mobx：支持处理异步
4.适合场景
redux：约束强，适合多人协作的大型开发项目
mobx：适合简单、规模不大的应用（复杂的也可以使用，但是需要合理的组织结构，理清依赖关系）

## 核心概念

observable：定义一个存储state的可追踪字段（？）
action：将一个方法标记为可以修改state的action
computed：标记一个由state派生出新值且缓存的计算属性

## 版本

mobx4：运行在支持ES5语法的浏览器（Object.defineProperty）
mobx5：运行在支持ES6语法的浏览器（Proxy）
mobx4和mobx5具有相同的API，都需要使用装饰器
mobx6：默认放弃了装饰器，为了和JS的最大兼容性，因为装饰器仅仅提案还没成为标准化

## 基本使用

- 新建store/TodoList.ts，
- makeObservable将类的属性和方法变成响应式

```JS
import { makeObservable, observable, action } from "mobx";
class TodoList {
  constructor() {
    makeObservable(this, {
      count: observable,
      todoList: observable,
      updateTodoList: action,
      deleteTodoList: action,
      addTodoList: action
    })
  }
  count = 0;
  todoList = [{
    name: Math.random().toString().slice(2, 8),
    id: 1,
  }];
  updateTodoList() { }
  deleteTodoList() { }
  addTodoList() { }
}
export default TodoList
```

- 导出实例（因为mobx每个store只应该初始化一次，？？：因为要共享一份数据）

-
