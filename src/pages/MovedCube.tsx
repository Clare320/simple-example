import React, { FC, useState, useEffect, useRef } from "react"
import styles from './MovedCube.less'

const MovedCube: FC = () => {
  const [offset, setOffset] = useState<number>(0)
  const cubeRef = useRef(null)

  useEffect(() => {
    // 用于处理非渲染操作，比如数据的请求与同步
    document.title = `偏移了${offset}`
  }, [offset])

  const moveToLeft = () => {
    setOffset(old => old - 50)
  }

  const moveToRight = () => {
    setOffset(old => old + 50)
  }

  const reset = () => {
    setOffset(0)
  }

  const buttons: { title: string, handler: () => void }[] = [
    { title: 'left', handler: moveToLeft },
    { title: 'right', handler: moveToRight },
    { title: 'reset', handler: reset }
  ]

  return (
    <div>
      <div className={styles.cube} ref={cubeRef} style={{ transform: `translatex(${offset}px)` }} />
      <div>
        {
          buttons.map((item, index) => (
            <button key={'b' + index} className={styles.button} onClick={item.handler}>{item.title}</button>
          ))
        }
      </div>
    </div>
  )
}

export default MovedCube