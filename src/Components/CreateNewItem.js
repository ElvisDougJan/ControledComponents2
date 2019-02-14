import React from 'react'
import PropTypes from 'prop-types'

class CreateNewItem extends React.Component {
	state = {
    	item: ''
    }

	handleChange = event => this.setState({item: event.target.value})
    
	addItem = event => {
    	event.preventDefault()
     	this.props.onAddItem(this.state.value)
    }

	inputIsEmpty = () => this.state.item === ''

	render() {
    	return(
      	<div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      	</div>
      )
    }
}

CreateNewItem.propTypes = {
	onAddItem: PropTypes.func.isRequired
}


export default CreateNewItem