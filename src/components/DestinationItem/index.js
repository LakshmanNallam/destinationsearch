import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {details} = this.props
    const {name, imgUrl} = details
    return (
      <li className="item">
        <img src={imgUrl} alt={name} className="imgsty" />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
