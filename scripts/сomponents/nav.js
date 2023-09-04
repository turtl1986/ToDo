import { getStatistic } from '../logic/index.js'
function nav (tasks) {
  const nav = document.createElement('nav')
  nav.className = 'nav'

  const allParagraf = document.createElement('p')
  allParagraf.className = 'all__label'
  allParagraf.textContent = `All:${tasks.length}`

  const completedParagraf = document.createElement('p')
  completedParagraf.className = 'completed__label'
  completedParagraf.textContent = `Completed:${getStatistic(tasks)}`

  const searchInput = document.createElement('input')
  searchInput.className = 'nav__searchInput'
  searchInput.type = 'search'
  searchInput.placeholder = 'Search....'

  const showAllBtm = document.createElement('button')
  showAllBtm.className = 'button showAllBtm'
  showAllBtm.textContent = 'Show All'

  const showCompletedBtm = document.createElement('button')
  showCompletedBtm.className = 'button showCompletedBtm'
  showCompletedBtm.textContent = 'Show Completed'

  nav.append(allParagraf, completedParagraf, searchInput, showAllBtm, showCompletedBtm)

  return nav
}

export { nav }
