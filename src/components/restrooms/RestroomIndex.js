import React, { Component } from 'react'
import axios from 'axios'
import Restroom from './Restroom.js'
import { Link } from 'react-router-dom'
import { axiosGetRestroomsAuthenticated } from './RestroomApi.js'



class RestroomIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restrooms: []
    }
  }

  componentDidMount() {
    event.preventDefault()
    axiosGetRestroomsAuthenticated(this.props.user)
      .then(res => {
        this.setState({ restrooms: res.data.restrooms })
      })
      .catch(console.error)
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