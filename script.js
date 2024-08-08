'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector
	this.height = height
	this.width = width
	this.bg = bg
	this.fontSize = fontSize
	this.createElement = function () {
		let elem
		if (selector[0] === '.') {
			elem = document.createElement('div')
			elem.classList.add(this.selector.slice(1))
			elem.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px; position: absolute`
			document.body.append(elem)
		} else if (selector[0] === '#') {
			elem = document.createElement('p')
			elem.id = this.selector.slice(1)
			elem.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px;`
			elem.textContent = 'Best'
			document.body.append(elem)
		}

		return elem
	}
}

// let newObj1 = new DomElement('.block', 100, 100, 'black')
// newObj1.createElement()

let newObj1 = new DomElement('.block', 100, 100, 'black')
let elem = newObj1.createElement()

let x = 0
let y = 0

document.addEventListener('keydown', function (event) {
	let px = 10

	switch (event.key) {
		case 'ArrowUp':
			y -= px
			break
		case 'ArrowDown':
			y += px
			break
		case 'ArrowLeft':
			x -= px
			break
		case 'ArrowRight':
			x += px
			break
	}

	elem.style.transform = `translate(${x}px, ${y}px)`
})
