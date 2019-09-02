# react-web-workers

> A Simple Library to use web worker with your React Application Easily

## Intro

If you are using some expensive processes inside your webpage, make sure you don't compromise your performance there. Web workers can make your web page feel smooth and realistic

## Install

Installing this package is super simple and just like any other package. If you are using npm:
```
npm i react-web-workers
```

But if you are yarn lover:
```
yarn add react-web-workers
```

## Workers

Create as many workers as you want as a function and export them just like this:
```javascript
const message = () => {
  let text = 'Hello I am Your Web Worker'

  const sentData = () => {
    // eslint-disable-next-line no-restricted-globals
    self.postMessage({ text })
  }

  // eslint-disable-next-line no-restricted-globals
  self.onmessage = ({ data }) => {
    console.log(data)
    sentData()
  }
}

export default message;
```

## Work with Workers

Once your workers are ready, import ```react-web-workers```
```javascript
import WebWorker from 'react-web-workers';
```

Also import your workers:
```javascript
import message from './workers/message';
...
```

Pass the workers directly as an array:
```javascript
const [messageWorker, ...] = WebWorker([message, ...]);
```

Now you have access to all the web workers functionality with this ```messageWorker``` and all the other workers you've been working with

In case if you're feeling any difficulty, please refer to the example we have in this project.

## Features

- Simple to Use
- Just import and start using
- All the default functionality is kept
- Create your worker function and export it  

## Examples

- Here's an Example of this library [Example](https://github.com/https://github.com/zonayedpca/react-web-workers/tree/master/example)
- Here's an Example of web worker in Action [Web Worker in Action](https://github.com/zonayedpca/web-workers)

## License

MIT © [Zonayed Ahmed](https://github.com/zonayedpca)
