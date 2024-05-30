
/*  ===================================================================
    Functions
===================================================================  */
var landing = true;
var lastPress = null;
var PageMoveUp = null;
var PageMoveDown = null;
var ContentOpen = null;
var ContentClosed = null;


/*  -------------------------------------------------------------------
    Button - CLick 
-------------------------------------------------------------------  */
/* Button Click is used when a button is clicked on the website. its 
main aim is to call a function based on the status of the site.      */


/*
Button Click will occur when the user clicks one of th buttons at the 
bottom of the screen. 

As a default the Landing Value is a Bool of True;
The button will have a corrisponding name (Name)

On click the fuction will check if the last name was called and 
if so, do nothing - for now 

If the button name is unique then the function will then check if the


*/

function ButtonClick(name) {
  var main = document.getElementsByTagName("main")[0].style;
  var exitB = document.getElementsByClassName("exit")[0].style;

  console.log(`Button press $(name)`)
  
  if (lastPress == name) {
      console.log(`Button press $(name) already pressed`);
    }
    else if (landing) {
      pageMoveup(main,name);
      landing = !landing;
      lastPress = name; 
      exitB.display = "inline";
    }
  else {
      lastPress = name; 
      Clear();
      contentClose(name);
    }
  }

function ButtonClose(){
  var exit = document.getElementsByTagName("main")[0].style;
  var content = document.getElementById("CT-Mid").style;
  var exitB = document.getElementsByClassName("exit")[0].style;

  Clear();
  pageMoveDn(exit);
  landing = !landing;
  lastPress = null;
  contenthide();
  content.flex = 0;
  exitB.display = "none";
}

function Clear () {
  clearInterval(ContentOpen);
  clearInterval(ContentClosed);
  clearInterval(PageMoveUp);
  clearInterval(PageMoveDown);
}

/*  ===================================================================
    PAGE MOVE - Functions
===================================================================  */
/*  -------------------------------------------------------------------
    Page Move - Up 
-------------------------------------------------------------------  */
function pageMoveup(elem,name) {
  var upos = 0;
  Clear();
  PageMoveUp = setInterval(frame, 10);
  function frame() {
    if (upos <= -100) {
      contentOpen(name);
      clearInterval(PageMoveUp);
    } else {
      upos --;
      elem.top = upos + 'vh';
    }
  }
}

/*  -------------------------------------------------------------------
    Page Move - Down 
-------------------------------------------------------------------  */
function pageMoveDn(elem) {
  var dpos = -100;
  Clear();
  PageMoveDown = setInterval(frame, 10);
  function frame() {
    if (dpos >= 0) {
      clearInterval(PageMoveDown);
    } else {
      dpos ++;
      elem.top = dpos + 'vh';
    }
  }
}

/*  ===================================================================
    Content  - Functions
===================================================================  */

/*  -------------------------------------------------------------------
    Content Open 
-------------------------------------------------------------------  */

function contentOpen(name) {
  var elem = document.getElementById("CT-Mid").style;
  var ofx = 0;
  Clear();
  ContentOpened = setInterval(frame, 3);
  function frame() {
    if (ofx >= 7) {
      clearInterval(ContentOpened);
      contentDisplay(name);
    } else {
      ofx += 0.025;
      elem.flex = ofx;
    }
  }
}


/*  -------------------------------------------------------------------
    Content Close 
-------------------------------------------------------------------  */

function contentClose(name) {
  var elem = document.getElementById("CT-Mid").style;
  var cfx = 4;
  Clear();
  contenthide();
  ContentClosed = setInterval(frame, 10);
  function frame() {
    if (cfx <= 0) {
      Clear();
      contentOpen(name);
    } else {
      cfx -= 0.02;
      elem.flex = cfx;
    }
  }
}

/*  -------------------------------------------------------------------
    Content Display 
-------------------------------------------------------------------  */

function contentDisplay(name) {
  Clear();
  var mid = document.getElementById("CT-Mid").style;
  var venue = document.getElementById("Venue").style;
  var Taxi = document.getElementById("Taxi").style;
  var RSVP = document.getElementById("RSVP").style;
  var Photos = document.getElementById("Photos").style;
  var Entertainment = document.getElementById("Entertainment").style;
  
  contenthide();

  switch (name) {
    case "venue":
      mid.gridTemplateAreas = `"A"`;
      venue.display = "inline";
      break;
    case "taxi":
      mid.gridTemplateAreas = `"B"`;
      Taxi.display = "inline";
      break;
    case "rsvp":
      mid.gridTemplateAreas = `"C"`;
      RSVP.display = "flex";
      break;
    case "photos":
      mid.gridTemplateAreas = `"D"`;
      Photos.display = "inline";
      break;
    case "entertainment":
      mid.gridTemplateAreas = `"E"`;
      Entertainment.display = "inline";
      break;
    default: 
      console.log ("Error");
  }
}

/*  -------------------------------------------------------------------
    Content Hide 
-------------------------------------------------------------------  */

function contenthide () {
  var venue = document.getElementById("Venue").style;
  var Taxi = document.getElementById("Taxi").style;
  var RSVP = document.getElementById("RSVP").style;
  var Photos = document.getElementById("Photos").style;
  var Entertainment = document.getElementById("Entertainment").style;

    // Clear Everything
    venue.display = "None";
    Taxi.display = "None";
    RSVP.display = "None";
    Photos.display = "None";
    Entertainment.display = "None";
}