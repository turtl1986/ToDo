import { toDo } from '../сomponents/index.js'
import { addHandlersFromTask } from '../handlers/index.js'
import { addClasses } from './index.js'
import { container } from '../constants/index.js'

function renderTodo (arr) {
  container.innerHTML = ''
  arr.forEach(value => {
    const todo = toDo(value)
    addHandlersFromTask(todo)
    addClasses(value, todo)
    container.append(todo)
  })
}

export { renderTodo }
