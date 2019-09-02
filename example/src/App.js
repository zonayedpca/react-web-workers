import React, { Component } from 'react'

import WebWorker from 'react-web-workers'

import message from './workers/message'
import count from './workers/count'

export default class App extends Component {
  render () {
    const [ messageWorker, countWorker ] = WebWorker([message, count])
    messageWorker.postMessage('Hi!')
    return (
      <div>
        <p>Web Worker</p>
      </div>
    )
  }
}
