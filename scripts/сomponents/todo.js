function toDo (value) {
  const toDo = document.createElement('section')
  toDo.className = 'toDo'
  toDo.id = value.id

  const check = document.createElement('input')
  check.className = 'toDo__check'
  check.type = 'checkbox'
  check.name = 'check'
  check.id = value.id

  const toDoLabel = document.createElement('label')
  toDoLabel.className = 'toDo__toDoLabel'
  toDoLabel.htmlFor = value.id
  toDoLabel.textContent = `${value.task}`

  const toDoCheck = document.createElement('span')
  toDoCheck.className = 'toDo__check-box'
  toDoCheck.htmlFor = value.id

  const toDoNav = document.createElement('div')
  toDoNav.className = 'toDoNav'

  const cancellationBtm = document.createElement('button')
  cancellationBtm.className = 'toDo__button'
  cancellationBtm.textContent = '✘'

  const editBtm = document.createElement('button')
  editBtm.className = 'edit__button'
  editBtm.textContent = 'edit'

  const dateParagraf = document.createElement('p')
  dateParagraf.className = 'todo__label'
  dateParagraf.textContent = `${value.date}`

  toDoLabel.append(check, toDoCheck)

  toDoNav.append(cancellationBtm, editBtm, dateParagraf)

  toDo.append(toDoLabel, toDoNav)

  return toDo
}
export { toDo }
