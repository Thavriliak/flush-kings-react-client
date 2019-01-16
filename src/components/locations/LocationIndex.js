import React, { Component } from 'react'
import axios from 'axios'
import Location from './Location.js'
import { axiosGetLocationApi } from '../../ApiWork'

class LocationIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4741/locations')
      .then(res => {
        this.setState({ locations: res.data.locations })
      })
  }

  render() {

    const Locations = this.state.locations.map((location, index) => {
      return (
        <Location key={index} location={location} />
      )
    })

    return (
      <div>
        {Locations}
      </div>
    )
  }
}

export default LocationIndex