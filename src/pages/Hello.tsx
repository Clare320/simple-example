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