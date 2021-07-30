import React from 'react'
import Search from './Search'

import './Search.css'
class FoodBox extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      items: props.food,
    }
  }


  render() {
    return (
      <div>
        <Search items={this.state.items} />
      </div>
    )
  }
}
export default FoodBox
