

let pages = document.querySelectorAll('.page')

console.log(pages)

window.addEventListener('scroll',function(){
	let index = Math.floor((window.scrollY + window.innerHeight/2) / window.innerHeight)


	pages[index].classList.add('visited')
})



