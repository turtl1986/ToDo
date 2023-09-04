function getItemLocalStorage (task) {
  return JSON.parse(localStorage.getItem(task)) ?? []
}

export { getItemLocalStorage }
