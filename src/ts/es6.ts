// let声明变量 const声明常量
const a: number = 12
const b: number = 13
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

// 泛型
const test11: <T>(s: T) => T = (s) => {
  return s
}

// 解构赋值
// 对象对应key
const { studentName, age, sex, address = '1006号' } = { studentName: 'xiaoming', age: 18, sex: 'male' }
console.log(`name:${studentName},age:${age},sex:${sex},address:${address}`)
// 数组对应下标
const [cn, math, es] = [93, 97, 91]
console.log(`cn:${cn},math:${math},es:${es}`)

// 箭头函数
const add = (a: number, b: number) => {
  return a + b
}
console.log('total is', add(a, b))

interface Theme {
  theme: string,
  icons: number
}
const params: Theme = { theme: 'dark', icons: 100 }
const show = ({ theme, icons }: Theme) => {
  console.log(`current theme is ${theme}, icons is ${icons}`)
}

// Promise
const promise = new Promise((resolve, reject) => {
  try {
    resolve(add(a, b))
  } catch (error) {
    reject(error)
  }
})
promise.then(value => {
  console.log('resolve--->', value)
}).catch(error => {
  console.log('reject--->', error)
})

const mult = (a: number, b: number) => {
  return a * b
}

// async-await
const calc = async () => {
  const total = await mult(3, 5)
  console.log('calc result:', total)
}
calc()

export { }