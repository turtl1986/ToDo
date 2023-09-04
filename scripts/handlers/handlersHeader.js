import { SELECTORS, root } from '../constants/index.js'
import { handlerUpdateStatistic, renderTodo, addTask, toDoValideter } from '../logic/index.js'
import { getItemLocalStorage, setItemLocalStorage } from '../localStorage/index.js'

function addHandlersHeader () {
  const header = root.querySelector(SELECTORS.header)

  const deleteAllBtm = header.querySelector(SELECTORS.deleteAllBtm)
  deleteAllBtm.addEventListener('click', handlerDeleteAll)
  deleteAllBtm.addEventListener('click', handlerUpdateStatistic)

  const deleteLastBtm = header.querySelector(SELECTORS.deleteLastBtm)
  deleteLastBtm.addEventListener('click', handlerDeleteLast)
  deleteLastBtm.addEventListener('click', handlerUpdateStatistic)

  const formAdd = header.querySelector(SELECTORS.formAdd)
  formAdd.addEventListener('submit', handlerAddTodo)
  formAdd.addEventListener('submit', handlerUpdateStatistic)
}

function handlerDeleteAll () {
  const tasks = getItemLocalStorage('tasks')
  if (tasks.length > 0) {
    tasks.length = 0
  }
  renderTodo(tasks)
  localStorage.clear()
}

function handlerDeleteLast () {
  const tasks = getItemLocalStorage('tasks')
  if (tasks.length > 0) {
    tasks.pop()
  }
  renderTodo(tasks)
  setItemLocalStorage('tasks', tasks)
}

function handlerAddTodo (event) {
  event.preventDefault()
  const { target } = event
  const formInput = target.querySelector(SELECTORS.formInput).value
  if (toDoValideter(formInput)) {
    addTask(formInput)
    renderTodo(getItemLocalStorage('tasks'))
    target.reset()
  }
}

export { addHandlersHeader, handlerAddTodo, handlerDeleteAll, handlerDeleteLast }
