import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import UserInput from './components/UserInput'

import './App.css'

class App extends Component {
  state = {inputList: [], inputText: ''}

  onChangeUserInput = event => {
    this.setState({inputText: event.target.value})
  }

  onAddCharacter = event => {
    event.preventDefault()
    const {inputText} = this.state
    const newDetails = {
      id: uuidv4(),
      userEnteredText: inputText,
      textLength: inputText.length,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, newDetails],
      inputText: '',
    }))
  }

  renderNoListView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="no-view-image"
      />
    </>
  )

  renderListview = () => {
    const {inputList} = this.state
    return (
      <ul className="list-container">
        {inputList.map(eachList => (
          <UserInput listDetails={eachList} key={eachList.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {inputText, inputList} = this.state
    const isShow = inputList.length === 0
    return (
      <div className="responsive-container">
        <div className="app-container">
          <div className="coutList-container">
            <h1 className="count-container-heading">
              Count the characters like a Boss...
            </h1>
            {isShow ? this.renderNoListView() : this.renderListview()}
          </div>
          <div className="input-container">
            <h1 className="input-heading">Character Counter</h1>
            <form className="form-container" onSubmit={this.onAddCharacter}>
              <input
                type="text"
                className="input-text"
                placeholder="Enter the Characters here"
                value={inputText}
                onChange={this.onChangeUserInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
