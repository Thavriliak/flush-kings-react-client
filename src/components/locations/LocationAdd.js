import React, { Component } from 'react'
import axios from 'axios'
import { axiosPostLocation } from './LocationApi.js'
// import { user } from '../auth/components/AuthenticatedRoute.js'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
// class LocationAdd extends Component {

//   // this is your basic constructor setup
//   constructor(props) {
//     super(props)

//     this.state = {
//       area: '',
//       message: null
//     }
//   }

//   // you must have a render function that returns
//   // some jsx

//   createLocation = event => {
//     console.log(user)
//     event.preventDefault()

//     // validating a few of our form values
//     const AreaValid = this.state.area.length < 50
//     // const yearValid = parseInt(this.state.year) && parseInt(this.state.year) >= 1893

//     // post request to create a single movie using axios
//     if (AreaValid) {
//       axios.post('http://localhost:4741/locations', {
//         location: {
//           area: this.state.area
//         }
//       })
//         .then(res => this.setState({ message: `made a new location with ID: ${res.data.location.id}` }))
//         .catch(console.error)
//     } else {
//       this.setState({ message: 'you have invalid form data!' })
//     }

//   }

//   onAreaChange = event => this.setState({ area: event.target.value })
  
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.createLocation}>
//           <input placeholder="area"
//             value={this.state.area}
//             onChange={this.onAreaChange} />
//           <input type="submit"
//             value="Create Location!" />
//         </form>
//         {this.state.message && <span>{this.state.message}</span>}
//       </div>
//     )
//   }
// }

// // remember to export your component so it can
// // be imported and used elsewhere
// export default LocationAdd

export default class LocationCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      area: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  clearForm = () => {
    this.setState(prevState => {
      const nextState = {}
      for (const key in prevState) {
        nextState[key] = ''
      }
      return nextState
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const data = { ...this.state }

    axiosPostLocation(data, this.props.user)
      .then(() => this.props.flash('Made a new location', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllLocations)
      .catch(() => console.error('oh no got an error'))
  }


  render() {
    return (
      <form
        className="new-location"
        onSubmit={this.handleFormSubmit}>
        <h3>Create Location</h3>

        <label htmlFor="area">Area of Providence</label>
        <input
          name="area"
          value={this.state.area}
          onChange={this.handleInputChange} />
        
        <button type="submit">Create Location</button>
      </form>
    )
  }
}