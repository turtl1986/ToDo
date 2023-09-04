import { SELECTORS } from '../constants/index.js'
import { renderTodo, handlerUpdateStatistic, toDoValideter } from '../logic/index.js'
import { getItemLocalStorage, setItemLocalStorage } from '../localStorage/index.js'
function addHandlersFromTask (todo) {
  const cancellationBtm = todo.querySelector('.toDo__button')

  cancellationBtm.addEventListener('click', handlerDeleteToDo)
  cancellationBtm.addEventListener('click', handlerUpdateStatistic)

  const editBtm = todo.querySelector(SELECTORS.editBtm)
  editBtm.addEventListener('click', handlerEditToDo)

  const toDoCheck = todo.querySelector(SELECTORS.toDoCheck)
  toDoCheck.addEventListener('click', handlerCheckToDo)
  toDoCheck.addEventListener('click', handlerUpdateStatistic)
}

function handlerDeleteToDo ({ target }) {
  const tasks = getItemLocalStorage('tasks')
  if (target.className === 'toDo__button') {
    const text = target.closest(SELECTORS.toDo).querySelector(SELECTORS.toDoLabel).innerText

    tasks.forEach((value, item, arr) => {
      if (arr[item].task === text) {
        arr.splice(item, 1)
      }
    }
    )
    setItemLocalStorage('tasks', tasks)
    renderTodo(getItemLocalStorage('tasks'))
  }
}

function handlerCheckToDo ({ target }) {
  const tasks = getItemLocalStorage('tasks')
  if (target.className === 'toDo__check-box') {
    const text = target.closest(SELECTORS.toDo).querySelector(SELECTORS.toDoLabel).innerText

    tasks.forEach((value, item, arr) => {
      if (arr[item].task === text) {
        arr[item].isCompleted = !(arr[item].isCompleted)
      }
    }
    )

    setItemLocalStorage('tasks', tasks)
    renderTodo(getItemLocalStorage('tasks'))
  }
}

function handlerEditToDo ({ target }) {
  const tasks = getItemLocalStorage('tasks')
  if (target.className === 'edit__button') {
    const todo = target.closest('.toDo')
    const todoText = todo.querySelector('.toDo__toDoLabel')
    const text = todoText.innerText
    let indexArray = 0
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].task === text) {
        indexArray = i
      }
    }

    if (!tasks[indexArray].isCompleted) {
      const editText = prompt('Редактирование ToDo?')

      if (toDoValideter(editText)) {
        tasks[indexArray].task = editText
        setItemLocalStorage('tasks', tasks)
        renderTodo(getItemLocalStorage('tasks'))
      }
    } else {
      alert('Задача завершена')
    }
  }
}

export { addHandlersFromTask, handlerCheckToDo, handlerDeleteToDo, handlerEditToDo }
