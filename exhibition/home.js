

let images = document.querySelectorAll('img')
let hasLoaded = 0

let minimumLoad = 3000


for(let counter = 0; counter < images.length; counter++){
	images[counter].addEventListener('load',()=>{
		hasLoaded ++
		if(hasLoaded == images.length){
			let now = performance.now()
			if(now > minimumLoad){
				document.body.classList.add('imagesLoaded')
			} else {
				setTimeout(function(){
					document.body.classList.add('imagesLoaded')
				}, minimumLoad - now)
			}
		}
	})
}





















