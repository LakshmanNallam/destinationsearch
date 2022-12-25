import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  inputChanging = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    console.log(destinationsList)

    const filteredList = destinationsList.filter(eachItem => {
      const text = eachItem.name.toLowerCase()
      return text.includes(searchInput)
    })
    return (
      <div className="mainDiv">
        <h1>Destination Search</h1>
        <div className="inputtt">
          <input
            placeholder="Search"
            type="search"
            onChange={this.inputChanging}
            value={searchInput}
            className="inpu"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="seaarchicon"
          />
        </div>
        <ul className="itemsCon">
          {filteredList.map(eachList => (
            <DestinationItem details={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
