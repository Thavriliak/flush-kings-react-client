import React, { Component} from 'react'
import { axiosPatchRestroom } from './RestroomApi'
import Restroom from './Restroom'

export default class RestroomUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  componentDidMount() {
    const firstRestroomId = this.props.restrooms[0].id
    this.changeRestroomData(firstRestroomId)
  }

    changeRestroomData = id => {
      const restroom = this.props.restrooms.find(restroom => String(restroom.id) === String(id))
      this.setState({
        name_of_establishment: restroom.name_of_establishment || '',
        cleanliness: restroom.cleanliness || '',
        smell: restroom.smell || '',
        number_of_toilets: restroom.number_of_toilets || null,
        handicap_accessible: restroom.handicap_accessible || null,
        baby_care: restroom.baby_care || null,
        hours: restroom.hours || '',
      })
    }

    handleInputChange = event => {
      const { name, value } = event.target
      if (name === 'id') {
        this.changeRestroomData(value)
      } else {
        this.setState({ [name]: value })
      }
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
      // patchMovie(data, this.props.user)
      //   .then(res => res.ok ? res : new Error())
      //   .then(() => this.props.flash('Fixed the movie, z', 'flash-success'))
      //   .then(this.clearForm)
      //   .catch(() => console.error('oh no got an error'))

      axiosPatchMovie(data, this.props.user)
        .then(() => this.props.flash('Made that Post', 'flash-success'))
        .then(this.clearForm)
        // .then(this.props.getAllMovies)
        .catch(() => console.error('oh no got an error'))
    }


    render() {

      const SelectOptions = this.props.restrooms.map((restroom, index) => {
        return <option key={index} value={restroom.id}>{restroom.name_of_establishment} (ID: {restrooom.id})</option>
      })
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