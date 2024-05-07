
/*══════════════════════════════════════════════════════════════════════
    JS - Variables
══════════════════════════════════════════════════════════════════════*/
var isPhone = false;  // Sets variable as phone - false


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Function to determine whether PC or Phone
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function myFunction(x) {
  if (x.matches) { // If media query matches
    isPhone = true;
  } else {
    isPhone =false
  }
  console.log(`Isphone = ${isPhone}`)
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});


function buttonCheck(name,type) {
  if (!isPhone) {
    pcButton(name,type)
  }
  else {
    phoneButton(name,type)
  }
}

function phoneButton (name,type) {
  console.log(`The Button ${name} was pressed on the phone and it is a ${type} `)
}
function pcButton (name,type) {
  console.log(`The Button ${name} was pressed on the PC and it is a ${type} `)
}




