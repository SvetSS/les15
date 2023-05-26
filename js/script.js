'use strict'
const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function () {
        let element;
        if (this.selector.startsWith('.')) {
            element = document.createElement('div');
            element.classList.add(this.selector.slice(1));
        } else if (this.selector.startsWith('#')) {
            element = document.createElement('p');
            element.id = this.selector.slice(1);
        }

        element.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;

        element.textContent = prompt('Привет, как тебя зовут?');
        //element.textContent = 'Привет, я появился';

        document.body.append(element);
    };
}

const element = new DomElement('#block', 50, 500, 'red', 20);

element.createElement();