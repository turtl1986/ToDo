import { SELECTORS } from './index.js'

const root = document.querySelector(SELECTORS.root)
const container = document.createElement('div')
container.className = 'container'

export { root, container }
