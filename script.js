'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector
	this.height = height
	this.width = width
	this.bg = bg
	this.fontSize = fontSize
	this.createElement = function() {
		let elem
		if(selector[0] === '.') {
			elem = document.createElement('div')
			elem.classList.add(this.selector.slice(1))
			elem.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px;`
			elem.textContent = 'Block'
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

let newObj1 = new DomElement('.block', 70, 80, 'yellow', 30)
newObj1.createElement()
let newObj2 = new DomElement('#best', 40, 50, 'green', 20)
newObj2.createElement()
