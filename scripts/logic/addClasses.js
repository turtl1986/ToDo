import { SELECTORS } from '../constants/index.js'
function addClasses (value, todo) {
  if (value.isCompleted) {
    todo.classList.add('checked')
  }

  const check = todo.querySelector(SELECTORS.check)
  if (value.isCompleted) {
    check.setAttribute('checked', '')
  }

  const toDoLabel = todo.querySelector(SELECTORS.toDoLabel)
  if (value.isCompleted) {
    toDoLabel.classList.add('checked--text')
  }
}

export { addClasses }
