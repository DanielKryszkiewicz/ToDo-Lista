let todoInput 
let errorInfo
let addBtn
let ulList
let newTodo
let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn


const main = () =>{
 prepareDOMElements()
 prepareDOMEvents()

}

const prepareDOMElements = () => {
todoInput = document.querySelector('.todo-input')
errorInfo = document.querySelector('.error-info')
addBtn = document.querySelector('.btn-add')
ulList = document.querySelector('.todolist ul')
popupInfo = document.querySelector('.popup-info')
popup = document.querySelector('.popup')
popupInput = document.querySelector('.popup-input')
popupAddBtn = document.querySelector('.accept')
popupCloseBtn = document.querySelector('.cancel')

}

const prepareDOMEvents = () => {

 addBtn.addEventListener('click',addNewTask)
 ulList.addEventListener('click', checkClick)
 popupCloseBtn.addEventListener('click',closePopup)
 popupAddBtn.addEventListener('click',changeTodoText)
 todoInput.addEventListener('keyup', enterKeyCheck)

}

const addNewTask = () => {
 if(todoInput.value !== ''){
  newTodo = document.createElement('li')
  newTodo.textContent = todoInput.value
  createToolsArea()
  ulList.append(newTodo)

  todoInput.value = ''
  errorInfo.textContent = ''

 }else {
  errorInfo.textContent = 'Wpisz treść zadania'
 }
}

const createToolsArea = () => {

 const toolsPanel = document.createElement('div') 
 toolsPanel.classList.add('tools')
 newTodo.append(toolsPanel)

 const completeBtn = document.createElement('button')
 const editBtn = document.createElement('button')
 const deleteBtn = document.createElement('button')

 completeBtn.classList.add('complete')
 completeBtn.innerHTML = '<i class="fas fa-check"></i>'
 editBtn.classList.add('edit') 
 editBtn.textContent = 'EDIT'
 deleteBtn.classList.add('delete')
 deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

 toolsPanel.append(completeBtn, editBtn, deleteBtn)

}

const checkClick = e => {
 if(e.target.matches('.complete')){
  e.target.closest('li').classList.toggle('completed')
  e.target.classlist.toggle('completed')
 }else if (e.target.matches('.edit')){
  editTodo(e)
 }else if (e.target.matches('.delete')){
  deleteTodo(e)
 }
}

const editTodo = (e) => {

 todoToEdit = e.target.closest('li')

 popupInput.value = todoToEdit.firstChild.textContent
 popup.style.display = 'flex'
}

const closePopup = () => {
 popup.style.display = 'none'
 popupInfo.textContent = '' 
}


const changeTodoText = () => {
 if(popupInput.value !== ''){
  todoToEdit.firstChild.textContent = popupInput.value
  popup.style.display = 'none'
  popupInfo.textContent = ''
 }else {
  popupInfo.textContent = "Musisz podać jakąś treść!"
 }

}

const deleteTodo = e => {

 e.target.closest('li').remove()
 const allTodos = ulList.querySelectorAll('li')

 if(allTodos.length === 0){
  errorInfo.textContent = 'Brak zadań na liście'
 } 
}

const enterKeyCheck = e => {
 if(e.key=== 'Enter'){
  addNewTask()
 }
}


document.addEventListener('DOMContentLoaded', main)