import React, { Component } from 'react'
import axios from 'axios'
import Restroom from './Restroom.js'



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
        {Restrooms}
      </div>
    )
  }
}

export default RestroomIndex