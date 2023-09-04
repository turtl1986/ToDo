import { getItemLocalStorage } from '../localStorage/index.js'
import { SELECTORS, root } from '../constants/index.js'

function handlerUpdateStatistic () {
  const tasks = getItemLocalStorage('tasks')
  root.querySelector(SELECTORS.labelShowAll).innerText = `All:${tasks.length}`
  let sum = 0
  tasks.forEach(item => {
    if (item.isCompleted) {
      sum++
    }
  })
  root.querySelector(SELECTORS.labelShowCompleted).innerText = `Completed:${sum}`
}

export { handlerUpdateStatistic }
