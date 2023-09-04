import { getItemLocalStorage, setItemLocalStorage } from '../localStorage/index.js'
function addTask (task) {
  const tasks = getItemLocalStorage('tasks')
  tasks.push({
    id: self.crypto.randomUUID(),
    task,
    isCompleted: false,
    date: new Date().toLocaleDateString()
  })
  setItemLocalStorage('tasks', tasks)
}

export { addTask }
