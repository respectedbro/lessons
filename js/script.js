const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value))

let toDoData = getData('toDo')


const render = function () {
	todoList.innerHTML = ''
	todoCompleted.innerHTML = ''

	toDoData.forEach(function (item) {
		const li = document.createElement('li')

		li.classList.add('todo-item')

		li.innerHTML = `<span class="text-todo">${item.text}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>`

		if (item.completed) {
			todoCompleted.append(li)
		} else {
			todoList.append(li)
		}

		li.querySelector('.todo-complete').addEventListener('click', function () {
			item.completed = !item.completed
			setData('toDo', toDoData)
			render()
		})
		li.querySelector('.todo-remove').addEventListener('click', function () {
			toDoData.splice(toDoData.indexOf(item), 1)
			setData('toDo', toDoData)
			render()

		})

	})
}
render()

todoControl.addEventListener('submit', function (event) {
	event.preventDefault()

	const newToDo = {
		text: headerInput.value,
		completed: false,
	}
	if (headerInput.value.trim() !== '') {
		toDoData.push(newToDo)
		headerInput.value = ''
		setData('toDo', toDoData)
		render()
	} else {
		setData('toDo', toDoData)
		return
	}

})


