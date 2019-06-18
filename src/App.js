import React, { Component } from 'react'
import './App.css'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{ this.props.store.num }</h1>
        <button onClick={ this.props.store.add }>添加</button>
        <button onClick={ this.props.store.reset }>重置</button>
      </div>
    )
  }
}

export default App
