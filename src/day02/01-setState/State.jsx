import React, { Component } from 'react'

export default class App extends Component {
  state = {
    msg: 'hello',
    flag: 'true'
  }
  change = ()=> {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <div>
        {this.state.msg}
        {this.state.flag && <p>{this.state.msg + 'aaa'}</p>}
        <button onClick={this.change}>{this.state.falg?'隐藏':'显示'}</button>
      </div>
    )
  }
}
