var target = document.getElementById('target');
var pos = target.getAttribute('position');
var new_box = document.createElement('a-box');
new_box.setAttribute('color', 'yellow');
document.querySelector('a-scene').appendChild(new_box);

function zoom(event) {
  event.preventDefault();

  pos.z += event.deltaY * -0.003;

  // Restrict scale
  pos.z = Math.min(Math.max(-7, pos.z), -2);

  // Apply scale transform
  target.setAttribute('position', pos)
  console.log(pos.z);
}


document.body.addEventListener('wheel', zoom, {passive: false});
