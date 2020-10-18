import React from 'react'

export default function Child1(props) {
  return (
    <div onClick={props.hander.bind(this,99)}>
      Child1
    </div>
  )
}
