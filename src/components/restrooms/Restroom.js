import React from 'react'
import { Route, Link } from 'react-router-dom'

const Restroom = props => {
  console.log(props)
  return (
    <div>
      <div className="addLocLink">
        <Link to="/add-post">Add a new post</Link>
        <Link to="/delete-post">Remove a post</Link>
      </div>
      <div>
        <h3>Restrooms in Providence</h3>
        <p>{props.data.name_of_establishment}</p>
        <p>{props.data.cleanliness}</p>
        <p>{props.data.smell}</p>
        <p>{props.data.number_of_toilets}</p>
        <p>{props.data.handicap_accessible}</p>
        <p>{props.data.baby_care}</p>
        <p>{props.data.hours}</p>
      </div>
    </div>
  )
}

export default Restroom