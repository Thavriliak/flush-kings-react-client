import React from 'react'
import { Route, Link } from 'react-router-dom'

const Location = props => {
  console.log(props)
  return (
    <div>
      <div>
        <h1>{props.data.area}</h1>
      </div>
    </div>
  )
}

export default Location