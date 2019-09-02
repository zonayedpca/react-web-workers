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
