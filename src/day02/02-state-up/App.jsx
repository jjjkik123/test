import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
export default class App extends Component {
  state= {
    data:''
  }
  changeHander = (data)=> {
    this.setState({
      data
    })
  }
  render() {
    return (
      <div>
        {this.state.data+'主页面'}
        <Child1 hander={this.changeHander}></Child1>
        <Child2 data={this.state.data}></Child2>
      </div>
    )
  }
}
