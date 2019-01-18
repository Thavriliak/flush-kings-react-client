import React from 'react'

export default class LocationDelete extends Component {
 	constructor(props) {
 		super(props)

	 	this.state = {
	 		id: nil
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

	 	axiosDeleteLocation(data, this.props.user)
	 		.then(() => this.props.flash('Deleted a location', 'flash-success'))
	 		.then(this.clearForm)
	 		.then(this.props.getAllLocations)
	 		.catch(() => console.error('oh no got an error'))
	}


	render() {
	 	return (
	 		<form
	 			className="delete-location"
	 			onSubmit={this.handleFormSubmit}>
	 			<h3>Delete a Location</h3>

	 			<label htmlFor="id">Area ID</label>
	 			<input
	 				name="id"
	 				value={this.state.id}
	 	onChange={this.handleInputChange} />

 		<button type="submit">Delete Location</button>
	 </form>
	 )
	}
}