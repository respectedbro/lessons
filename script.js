'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector
	this.height = height
	this.width = width
	this.bg = bg
	this.fontSize = fontSize
	this.createElement = function() {
		if(selector[0] === '.') {
			let div = document.createElement('div')
			div.classList.add(this.selector.slice(1))
			div.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px;`
			div.textContent = 'Block'
			document.body.append(div)
		} else if (selector[0] === '#') {
			let p = document.createElement('p')
			p.id = this.selector.slice(1)
			p.style.cssText = `height: ${height}px; width: ${width}px; background-color: ${bg}; font-size: ${fontSize}px;`
			p.textContent = 'Best'
			document.body.append(p)
		}
	}
}

let newObj1 = new DomElement('.block', 70, 80, 'yellow', 30)
newObj1.createElement()
let newObj2 = new DomElement('#best', 40, 50, 'green', 20)
newObj2.createElement()
