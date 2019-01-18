import React from 'react'
import { Route, Link } from 'react-router-dom'

const Location = props => {
  console.log(props)
  return (
    <div>
      <div>
        <h4>{props.data.area}</h4>
      </div>
    </div>
  )
}

export default Location