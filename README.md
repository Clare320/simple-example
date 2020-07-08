开发模式：ES6语法 + Typescript + Function Component + React Hooks

## ES6 + TypeScript

### let const 声明变量

```tsx
// 数字
let c: number = 15
c = 19
// 布尔值
const isSelected: boolean = false
// 字符串
const color: string = 'red'
// 数组
const scores: number[] = [100, 100, 100] // Array<number>
// 元祖
const x: [string, number] = ['xiaohong', 80]
// 枚举
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let direction = Direction.Up
// Any, null, undefined, never
```

### 解构赋值

* 对象解构，键对应

  ```tsx
  const { studentName, age, sex, address = '1006号' } = { studentName: 'xiaoming', age: 18, sex: 'male' }
  console.log(`name:${studentName},age:${age},sex:${sex},address:${address}`)
  ```

* 数组解构，下标对应

  ```tsx
  const [cn, math, es] = [93, 97, 91]
  console.log(`cn:${cn},math:${math},es:${es}`)
  ```

* 函数参数解构，类同对象解构

  ```tsx
  interface Theme { 
    theme: string,
    icons: number
  }
  const params: Theme = { theme: 'dark', icons: 100 }
  const show = ({ theme, icons }: Theme) => { 
    console.log(`current theme is ${theme}, icons is ${icons}`)
  }
  ```

### 箭头函数

```tsx
const add = (a: number, b: number) => {
	return a + b
}
```

```tsx
function add(a: number, b: number) {
	return a + b
}
```

箭头函数中this是在创建时绑定，普通function中this是调用时绑定。

### 异步方案

#### Promise

```ts
const promise = new Promise((resolve, reject) => {
	// 处理异步操作
	const value = {}
	const result = true
	if (result) {
		resolve(value)
	} else {
		reject()
	}
})

promise.then(value => {
	// 处理resolve
}, error => {
	// 处理reject
})
```

#### async-await

```typescript
const calc = async () => {
  const total = await mult(3, 5)
  console.log('calc result:', total)
}
calc()
```

`async`表明当前函数是异步函数，`await`表明紧跟之后的表达式语句需要执行等待结果。`async`函数返回的是`Promise`对象。

## React

### JSX

```jsx
const element = <div>JSX</div>
```

JSX可以是一个元素，是表达式，可以表示一个对象（`React.createElement()`），不是组件。

在JSX语句中使用变量或者表达式用`{}`包括起来。

### 属性

从上层组件传递下来的数据，props不能被修改。在开发中用`interface`来声明属性。

在`Hello`组件中定义一个`Props`的`interface`。

```tsx
interface Props {
  name: string
}
```

在调用组件时

```tsx
<Hello name='xiaoming' />
```

如果一些属性有默认值时，可以在声明的属性后面加个`?`表示可选，在解构时设置默认值。

```tsx
interface Props {
	name?: string
}

const Hello: FC<Props> = ({ name = 'world' }) => (
	<div>{name}</div>
)
```

### 状态

是否需要重渲染是设置状态的一个判断标准。

函数组件本身是无状态的，通过React Hooks来让函数组件能够处理状态。一旦状态发生改变就会触发重渲染。

在`.tsx`文件函数组件内声明一个状态。

```tsx
const [offset, setOffset] = useState<number>(0)
```

### 组件

组件名称必须以大写字母开头，React会将小写字母开头的组件视为原生DOM标签。

React建议不要创建自己的组件基类，在React组件中，代码重用的主要方式是组合而不是继承。

```tsx
import React, { FC } from 'react'

interface HelloProps { 
  name: string
}

const Hello: FC<HelloProps> = ({ name }) => { 
  return (
    <div>Hello {name}</div>
  )
}

export default Hello
```

### useState

```tsx
const [count, setCount] = useState<number>(0)
```

### useEffect

```tsx
useEffect(() => {
	return () => {
		//副作用清除
	}
}, [])
```

处理所有非渲染的操作。比如请求，文件处理等

useEffect执行情况：

* 不设置关联变量，每次重渲染都会执行
* 设置为[]，初次渲染成功后执行，仅执行一次
* 设置为具体的关联，这些关联发生变化后就会执行

关联变量一定要具体，是根据在effect代码块逻辑涉及到外部状态量

### useContext

配合MobX使用，

```tsx
const context = React.createContext({ name: 'biubiu' })

const cxt = useContext(context)
<div>{cxt.name}</div>
```

使用`useContext`组件的上层没有找到对应context的Provider，就使用context的默认值。现在使用Mobx的时候不再需要提供Provider和inject store，直接将对应的store封到context里面，用useContext来获取。



## VS Code插件

ES7 React/Redux/GraphQL/React-Native snippets -- 代码块，最常用的`tsrafce`用户片段指令。

## 文档

[es6](https://es6.ruanyifeng.com/#README)

[React](https://zh-hans.reactjs.org/docs/getting-started.html)

[TypeScript](https://www.tslang.cn/docs/handbook/basic-types.html)

[antd](https://ant.design/components/overview-cn/)

[ahooks](https://ahooks.js.org/zh-CN/hooks/async)



