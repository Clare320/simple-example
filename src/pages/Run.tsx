import React, { useEffect } from 'react'

interface Props {
  orientation: string
}

const Run = (props: Props) => {
  useEffect(() => {
    console.log(`run---->${props.orientation}`)
  }, [props.orientation])

  return (
    <div>
      {props.orientation}
    </div>
  )
}

export default Run
