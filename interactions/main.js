
let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");


let items = document.querySelectorAll('.item')



for(let counter = 0; counter < items.length; counter += 1){
  items[counter].addEventListener("click", function() {
    items[counter].classList.add('beenClicked')
    })
  items[counter].addEventListener("mouseenter", function() {
    items[counter].classList.add('beenHovered')
    })
}


element3.addEventListener("click", function() {
  element3.animate(
    [
      {
        opacity: 0,
        marginLeft: getComputedStyle(this).marginLeft, 
        fontSize: "100px", 
        borderWidth: getComputedStyle(this).borderWidth 
      },
      {
        opacity: 0.4, 
        marginLeft: "125px", 
        fontSize: "24px", 
        borderWidth: "10px" 
      }
    ],
    {
      duration: 200,
      iterations: 1,
      fill: "forwards"
    }
  );
});

element6.addEventListener("pointermove", function(e) {
  var xPos = e.pageX - 125;
  var yPos = e.pageY - 125;

  this.style.position = "absolute";
  this.style.top = yPos + "px";
  this.style.left = xPos + "px";
});

element4.addEventListener("click", function() {
  this.classList.add("gradient-background");
});

element5.addEventListener("click", function() {
  this.nextElementSibling.classList.toggle("circle");
});

// element12.onmousemove = function() {
//       let start = Date.now();

//       let timer = setInterval(function() {
//         let timePassed = Daㅍㅁte.now() - start;

//         train.style.left = timePassed / 5 + 'px';

//         if (timePassed > 2000) clearInterval(timer);

//       }, 20);
//     }



let element19 = document.querySelector('#element-19')

let colors = [
  ' #FF7F50',
  ' #FCCF6B',
  ' #B9EFD7',
  ' #D4EA53'
]


element19.addEventListener('click',function(){

  let newItem = document.createElement('div')
  newItem.classList.add('item')
  // '<div class="item"></div>'

  let colorToUse = Math.floor(Math.random() * colors.length)


  newItem.style.position = 'absolute'
  newItem.style.top = Math.random() * 500 - 250 + 'px'
  newItem.style.left = Math.random() * 500 - 250 + 'px'
  newItem.style.background = colors[colorToUse]

  element19.appendChild(newItem)




})




let element26 = document.querySelector('#element-26')

let scale = 100

element26.addEventListener('mousewheel',function(event){

  scale += event.deltaY

  if(scale < 20){
    scale = 20
  }

  if(scale > 2000){
    scale = 2000
  }
  
  element26.style.transform = `scale(`+ (scale/100) +`)`

  event.preventDefault()
  event.stopPropagation()
})









