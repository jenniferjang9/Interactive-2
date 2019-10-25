


document.addEventListener('mousemove',function(event){
	let div = document.createElement('div')

	div.classList.add('blob-one')

div.style.left = (event.clientX - 100) + 'px'
div.style.top = (event.clientY - 100) + 'px'

let speed = Math.sqrt(event.movementX * event.movementX + event.movementY * event.movementY)
console.log(speed)
// div.style.borderRadius = (100 - speed)+'% '+(70 - speed)+'% '+(50 - speed)+'% '+(30 - speed)
// div.style.borderRadius = (30 - speed)+'% '+(70 - speed)+'% '+(70 - speed)+'% '+(30 - speed)+'% / '+(30 - speed)+'% '+(65 - speed)+'% '+(35 - speed)+'% '+(70 - speed)+'%'
div.style.borderRadius = (0 - speed)+'% '+(0 - speed)+'% '+(0 - speed)


	div.style.background = 'radial-gradient(hsl(' + ( 180 + event.clientX)+ 'deg,100%,50%), hsl('+ ( event.clientX)+'deg,100%,50%))'

'radial-gradient(hsl(230deg,100%,50%), hsl(50deg,100%,50%))'

	document.body.appendChild(div)
})
  
