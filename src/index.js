/**
 * @function WebWorker
 */

import CreateWorker from './utils/CreateWorker'

export default (files) => {
  return files.map(file => new CreateWorker(file))
}
