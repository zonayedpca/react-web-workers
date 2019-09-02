import React, { Component } from 'react'

import ExampleComponent from 'react-web-worker'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Working with Web Workers in React' />
      </div>
    )
  }
}
