import React from 'react'
import logo from './logo.svg'
import './App.css'
import CreateNewItem from './Components/CreateNewItem'
import ItemList from './Components/ItemList'
import DeleteLastItem from './Components/DeleteLastItem'

class App extends React.Component {
  state = {
    items: []
  }

  handleAddItem = item => this.setState(prevState => ({ items: [...prevState.items, item] }))

  handleDeleteLastItem = item => this.setState(prevState => ({ items: this.state.items.slice(0, -1) }))

  noItemsFound = () => this.state.items.length === 0


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem onAddItem={this.handleAddItem} />
        <DeleteLastItem
          onDeleteLastItem={this.handleDeleteLastItem}
          buttonDisabled={this.noItemsFound()}
        />
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

export default App