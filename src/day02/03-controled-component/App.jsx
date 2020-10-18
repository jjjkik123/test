import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.ipt = createRef()
  }
  state = {
    value:'nihao '
  }
  change = (e)=> {
    this.setState({
      value: e.target.value
    },()=> {
      console.log(this.state.value)
    })
  }
  render() {
    return (
      <div>
        {/* <input type="text" value={this.state.value} onChange={this.change} /> */}
        <input type="text" ref={this.ipt} onChange={this.change} />
      </div>
    )
  }
}
