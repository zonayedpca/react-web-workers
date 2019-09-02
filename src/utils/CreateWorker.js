export default class CreateWorker {
  constructor(worker) {
    let code = worker.toString()
    code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))
    // eslint-disable-next-line no-undef
    code = new Blob([code], { type: 'application/javascript' })
    // eslint-disable-next-line no-undef
    code = new Worker(URL.createObjectURL(code))
    return code
  }
}
