


document.addEventListener('mousemove',function(event){
	let div = document.createElement('div')

	div.classList.add('blob-one')

div.style.left = (event.clientX - 100) + 'px'
div.style.top = (event.clientY - 100) + 'px'

let speed = Math.sqrt(event.movementX * event.movementX + event.movementY * event.movementY)
console.log(speed)
div.style.borderRadius = (30 - speed)+'% '+(70 - speed)+'% '+(70 - speed)+'% '+(30 - speed)+'% / '+(30 - speed)+'% '+(65 - speed)+'% '+(35 - speed)+'% '+(70 - speed)+'%'


	div.style.background = 'radial-gradient(hsl(' + ( 180 + event.clientX)+ 'deg,100%,50%), hsl('+ ( event.clientX)+'deg,100%,50%))'

'radial-gradient(hsl(230deg,100%,50%), hsl(50deg,100%,50%))'

	document.body.appendChild(div)
})
  
  // console.log(event.pageX)
  // console.log(event.pageY)
  

// let circle = document.querySelector('.circle')
// let circleCount = 0

// circle.addEventListener('click',function(){
//   if(circleCount % 3 == 0){
    
    
    
    
//     console.log('zero')
//     let randomR = Math.random() * 255
//     larry.style.background = 'rgb('+randomR+',128,128)'
    
//   } else if(larryCount % 3 == 1){
    
    
    
//     console.log('one')
//     let randomWidth = 80 + Math.random() * 40
//      circle.style.width = randomWidth + 'px'
    
//   } else if(circleCount % 3 == 2){
    
    
    
//     console.log('two')
    
//     circle.style.marginTop = Math.random() * 25 + 'px'
    
    
//   }
  
//   circleCount = circleCount + 1
  
  
//   console.log(circleCount)
  
  
  
// })