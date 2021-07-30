import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent'
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: props.items,
    }
  }

  switchHandler = () => {
    console.log('Calling switchhandler')
    const in_val = document.getElementById('inp')
    if (in_val === '') {
      this.setState({ values: this.props.items })
    } else {
      const avail_values = this.state.items
        .map((value) => {
          const re = new RegExp(in_val, 'gi')
          if (value.name.search(re) >= 0) {
            return value
          }
          return ''
        })
        .filter((value) => typeof value === 'object')
      this.setState({ values: avail_values })
    }
  }
  //   let in_val = e.target.value
  //   console.log('Input value is' + in_val)
  //   if (in_val === '') {
  //     this.setState = { items: this.props.items }
  //   } else {
  //     this.state.items.forEach((x) => {
  //       if (x.name === in_val) {
  //         console.log('Checking function')
  //         console.log(x.name)
  //         this.setState = {
  //           items: [
  //             {
  //               name: x.name,
  //               calories: x.calories,
  //               image: x.image,
  //             },
  //           ],
  //         }
  //         console.log('Function check done')
  //       }
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <div>Search</div>
        <input
          className="search"
          id="inp"
          type="text"
          placeholder=" Find a Food"
          onChange={this.switchHandler}
        ></input>
        <DisplayComponent details={this.state.items} />
      </div>
    )
  }
}

export default Search
