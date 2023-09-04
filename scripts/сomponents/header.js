function header () {
  const header = document.createElement('header')
  header.className = 'header'

  const deleteAllBtm = document.createElement('button')
  deleteAllBtm.className = 'button deleteAllBtm'
  deleteAllBtm.textContent = 'Delete All'

  const deleteLastBtm = document.createElement('button')
  deleteLastBtm.className = 'button deleteLastBtm'
  deleteLastBtm.textContent = 'Delete last'

  const formAdd = document.createElement('form')
  formAdd.className = 'formAdd'

  const addToDoInput = document.createElement('input')
  addToDoInput.className = 'header__addInput'
  addToDoInput.type = 'text'
  addToDoInput.placeholder = 'Enter todo....'

  const addBtn = document.createElement('button')
  addBtn.className = 'button addBtn'
  addBtn.textContent = 'Add'

  formAdd.append(addToDoInput, addBtn)

  header.append(deleteAllBtm, deleteLastBtm, formAdd)

  return header
}
export { header }
