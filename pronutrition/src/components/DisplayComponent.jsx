import React, { Component } from 'react'
import './FoodBox.css'
var new_list = []
var new_val = 1
class DisplayComponent extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      list: [],
    }
  }
  show = () => {
    const list = this.props.details.map((item) => {
      return (
        <div>
          <div>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={item.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{item.name}</strong> <br />
                      <small>{item.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        onChange={this.change}
                      />
                    </div>
                    <div className="control">
                      <button
                        className="button is-info"
                        onClick={() => this.click(new_val)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      )
    })
    console.log(list)
    return list
  }
  nextsection = () => {
    if (this.state.list === []) {
      return <div>Total 0 Calories of Food</div>
    } else {
      console.log(this.state.list)
      const total = this.state.list.reduce((totl, value) => {
        return totl + value[1]
      }, 0)
      console.log(JSON.stringify(total))
      return (
        <div className="cal">
          <b>Total {total} calories of Food</b>
          {this.state.list.map((val, index) => {
            return (
              <div className="list">
                <div>
                  {index + 1}.{val[0]}={val[1]}
                </div>
                <button onClick={() => this.exiting(val)}>x</button>
              </div>
            )
          })}
        </div>
      )
    }
  }

  exiting = (value) => {
    //when you click the exit button on each item in the outputbox that item will get removed in the output box
    console.log(value[0])
    new_list = this.state.list.filter((val) => {
      if (val[0] !== value[0]) {
        return val
      }
    })
    this.setState({ list: new_list })
  }

  change = (e) => {
    //this function set the new_value to the value that you input in the inputbox
    new_val = e.target.value
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="section">{this.show()}</div>
        {this.nextsection()}
      </div>
    )
  }
}

export default DisplayComponent
