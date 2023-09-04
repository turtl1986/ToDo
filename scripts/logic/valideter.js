import { getItemLocalStorage } from '../localStorage/index.js'

function toDoValideter (data) {
  const tasks = getItemLocalStorage('tasks')
  if (!(data.trim())) {
    alert('Введите задачу')
    return false
  } else if (tasks.find(item => item.task.toLowerCase() === data.trim().toLowerCase())) {
    alert('Задача существует')
    return false
  } else {
    return true
  }
}

export { toDoValideter }
