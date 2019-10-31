

let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')
let secondHand = document.querySelector('#secondHand')

// run getTime once on load


// call getTime every 1 second going forward

let startTime = new Date()

window.requestAnimationFrame(getTime)


let timeSpeed = 100

document.addEventListener('mousemove',function(e){
	timeSpeed = 100 - e.movementX * 100
	// timeSpeed = 100 - e.movementX * 100
})

// set up time getting function

function getTime(){
  
  // get the date object
 

  let d = new Date();

  let timeDif = d.getTime() - startTime.getTime()

  // let futureDate = new Date(d + timeDif * 10)


  let future = new Date(d.getTime() + timeDif * timeSpeed)
  console.log(d.getTime(), future.getTime())

  // get hours, minutes, and seconds from the date object
  
  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());

  let meridan = 'am'

  if(h > 12){
  	h = h - 12
  	meridan = 'pm'
  }


  let fh = addZeroIfNeeded(future.getHours());
  let fm = addZeroIfNeeded(future.getMinutes());
  let fs = addZeroIfNeeded(future.getSeconds());

    let fmeridan = 'am'

  if(fh > 12){
  	fh = fh - 12
  	fmeridan = 'pm'
  }

  // update the clock's text with our time vars
  
  let timeText = h + ":" + m + ":" + s + meridan + "  " + fh + ":" + fm + ":" + fs + fmeridan
  timeEl.innerText = timeText




  window.requestAnimationFrame(getTime)

}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}