import React, { Component } from 'react'
import axios from 'axios'
import Restroom from './Restroom.js'
import { Link } from 'react-router-dom'



class RestroomIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restrooms: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4741/restrooms')
      .then(res => {
        this.setState({ restrooms: res.data.restrooms })
      })
  }

  render() {

    const Restrooms = this.state.restrooms.map((data, index) => {
      return (
        <Restroom key={index} data={data} />
      )
    })

    return (
      <div>
        <div className="RestLinks">
          <Link to="/add-post">Add a new post</Link>
          <Link to="/delete-post">Remove a post</Link>
        </div>
        <div>
          {Restrooms}
        </div>
      </div>
    )
  }
}

export default RestroomIndex