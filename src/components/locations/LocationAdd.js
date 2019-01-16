import React, { Component } from 'react'
import axios from 'axios'
// import { user } from '../auth/components/AuthenticatedRoute.js'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class LocationAdd extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      area: '',
      message: null
    }
  }

  // you must have a render function that returns
  // some jsx

  createLocation = (event) => {
    console.log(user)
    event.preventDefault()

    // validating a few of our form values
    const AreaValid = this.state.area.length < 50
    // const yearValid = parseInt(this.state.year) && parseInt(this.state.year) >= 1893

    // post request to create a single movie using axios
    if (AreaValid) {
      axios.post('http://localhost:4741/locations', {
        location: {
          area: this.state.area
        }
      })
        .then(res => this.setState({ message: `made a new location with ID: ${res.data.location.id}` }))
        .catch(console.error)
    } else {
      this.setState({ message: 'you have invalid form data!' })
    }

  }

  onAreaChange = event => this.setState({ area: event.target.value })
  
  render() {
    return (
      <div>
        <form onSubmit={this.createLocation}>
          <input placeholder="area"
            value={this.state.area}
            onChange={this.onAreaChange} />
          <input type="submit"
            value="Create Location!" />
        </form>
        {this.state.message && <span>{this.state.message}</span>}
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default LocationAdd