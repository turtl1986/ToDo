import { root, container } from '../constants/index.js'
import { getItemLocalStorage } from '../localStorage/index.js'
import { header, nav } from '../сomponents/index.js'
import { addHandlersHeader, addHandlersNav } from '../handlers/index.js'
import { renderTodo } from '../logic/renderTodo.js'

function initToDo () {
  const tasks = getItemLocalStorage('tasks')
  root.prepend(header())
  addHandlersHeader()
  root.append(nav(tasks))
  addHandlersNav()
  root.append(container)
  renderTodo(tasks)
}

export { initToDo }
