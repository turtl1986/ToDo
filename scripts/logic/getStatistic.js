import { getItemLocalStorage } from '../localStorage/index.js'
function getStatistic () {
  const tasks = getItemLocalStorage('tasks')
  let sum = 0
  tasks.forEach(item => {
    if (item.isCompleted) {
      sum++
    }
  })
  return sum
}

export { getStatistic }
