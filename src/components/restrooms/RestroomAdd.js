import React, { Component } from 'react'
import axios from 'axios'
import { axiosPostRestroom } from './RestroomApi.js'
// import { user } from '../auth/components/AuthenticatedRoute.js'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class RestroomAdd extends Component {

// this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      name_of_establishment: '',
      cleanliness: '',
      smell: '',
      number_of_toilets: null,
      handicap_accessible: null,
      baby_care: null,
      hours: '',
      message: null
    }
  }

    // you must have a render function that returns
    // some jsx

    createRestroom = (event) => {
      console.log(event)
      event.preventDefault()

      // validating a few of our form values
      const EstValid = this.state.name_of_establishment.length < 50
      // const yearValid = parseInt(this.state.year) && parseInt(this.state.year) >= 1893

      // post request to create a single movie using axios
      if (EstValid) {
        axiosPostRestroom(data, this.props.user)
          // , {
          // restroom: {
          //   name_of_establishment: '',
          //   cleanliness: '',
          //   smell: '',
          //   number_of_toilets: null,
          //   handicap_accessible: null,
          //   baby_care: null,
          //   hours: '',
          //   message: null
          // }
          .then(res => this.setState({ message: `made a new post with ID: ${res.data.restroom.id}` }))
          .catch(console.error)
      } else {
        this.setState({ message: 'you have invalid form data!' })
      }

    }

  onLocationChange = event => this.setState({ location: event.target.value })
  
  onEstChange = event => this.setState({ name_of_establishment: event.target.value })
  
  onCleanlinessChange = event => this.setState({ cleanliness: event.target.value })

  onSmellChange = event => this.setState({ smell: event.target.value })

  onNumToilChange = event => this.setState({ number_of_toilets: event.target.value })

  OnHandiChange = event => this.setState({ handicap_accessible: event.target.value })

  onBabyChange = event => this.setState({ baby_care: event.target.value })

  onHoursChange = event => this.setState({ hours: event.target.value })

  render() {
    return (
      <div>
        <form onSubmit={this.createRestroom}>
          <input placeholder="location ID"
            value={this.state.location}
            onChange={this.onLocationChange} />
          <input placeholder="name of establishment"
            value={this.state.name_of_establishment}
            onChange={this.onEstChange} />
          <input placeholder="cleanliness"
            value={this.state.cleanliness}
            onChange={this.onCleanlinessChange} />
          <input placeholder="smell"
            value={this.state.smell}
            onChange={this.onSmellChange} />
          <input placeholder="number of toilets"
            value={this.state.number_of_toilets}
            onChange={this.onNumToilChange} />
          <input placeholder="handicap accessible?"
            value={this.state.handicap_accessible}
            onChange={this.onHandiChange} />
          <input placeholder="baby care area?"
            value={this.state.baby_care}
            onChange={this.onBabyChange} />
          <input placeholder="hours"
            value={this.state.hours}
            onChange={this.onHoursChange} />
          <input type="submit"
            value="Create Post!" />
        </form>
        {this.state.message && <span>{this.state.message}</span>}
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default RestroomAdd