import React from 'react'
import { Route, Link } from 'react-router-dom'

const Location = props => {
  console.log(props)
  return (
    <div>
      <h3>Locations in Providence</h3>
      <p>{props.data.area}</p>
    </div>
  )
}

export default Location