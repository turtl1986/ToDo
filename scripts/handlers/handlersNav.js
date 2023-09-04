import { SELECTORS, root } from '../constants/index.js'
import { renderTodo } from '../logic/index.js'
import { getItemLocalStorage } from '../localStorage/index.js'
function addHandlersNav () {
  const nav = root.querySelector(SELECTORS.nav)

  const showAllBtm = nav.querySelector(SELECTORS.showAllBtm)
  showAllBtm.addEventListener('click', handleShowAll)

  const showCompletedBtm = nav.querySelector(SELECTORS.showCompletedBtm)
  showCompletedBtm.addEventListener('click', handleShowCompleted)

  const searchInput = nav.querySelector(SELECTORS.searchInput)
  searchInput.addEventListener('input', handleSearch)
}

function handleShowCompleted ({ target }) {
  const tasks = getItemLocalStorage('tasks')
  const arr = []
  if (target.className === 'button showCompletedBtm') {
    tasks.forEach(task => {
      if (task.isCompleted) {
        arr.push(task)
        renderTodo(arr)
      }
    })
  }
}

function handleShowAll ({ target }) {
  const tasks = getItemLocalStorage('tasks')
  if (target.className === 'button showAllBtm') {
    renderTodo(tasks)
  }
}

function handleSearch ({ target }) {
  const tasks = getItemLocalStorage('tasks')
  const searchList = tasks.filter(item => item.task.toLowerCase().includes(target.value.toLowerCase()))
  renderTodo(searchList)
}

export { addHandlersNav, handleShowCompleted, handleShowAll, handleSearch }
