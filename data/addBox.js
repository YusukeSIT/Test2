let textbox_element = document.getElementById('world');

let new_element = document.createElement('a-box');
new_element.setAttribute("position", "0 0.5 -3");
new_element.setAttribute("scale", "1 1 1");
new_element.setAttribute("color", "blue");
textbox_element.appendChild(new_element);
