
/*  ===================================================================
    Functions
===================================================================  */
var landing = true;
var lastPress = null;
var id = null;
var ct = null;
var cb = null;

/*  -------------------------------------------------------------------
    Button - CLick 
-------------------------------------------------------------------  */
/* Button Click is used when a button is clicked on the website. its 
main aim is to call a function based on the status of the site.      */

function ButtonClick(name) {
  var main = document.getElementsByTagName("main")[0].style;
  var exitB = document.getElementsByClassName("exit")[0].style;
  
  if (lastPress == name) {
          console.log("");
    }
    else if (landing) {
      pageMoveup(main,name);
      landing = !landing;
      lastPress = name; 
      clearInterval(ct);
      exitB.display = "inline";
    }
  else {
      lastPress = name; 
      clearInterval(ct);
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
  clearInterval(ct);
  clearInterval(id);
  clearInterval(cb);
}

/*  ===================================================================
    PAGE MOVE - Functions
===================================================================  */
/*  -------------------------------------------------------------------
    Page Move - Up 
-------------------------------------------------------------------  */
function pageMoveup(elem,name) {
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos <= -100) {
      contentOpen(name);
      clearInterval(id);
    } else {
      pos --;
      elem.top = pos + 'vh';
    }
  }
}

/*  -------------------------------------------------------------------
    Page Move - Down 
-------------------------------------------------------------------  */
function pageMoveDn(elem) {
  var pos = -100;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos >= 0) {
      clearInterval(id);
    } else {
      pos ++;
      elem.top = pos + 'vh';
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
  var fx = 0;

  clearInterval(ct);
  ct = setInterval(frame, 3);
  function frame() {
    if (fx >= 7) {
      clearInterval(ct);
      contentDisplay(name);
    } else {
      fx += 0.025;
      elem.flex = fx;
    }
  }
}


/*  -------------------------------------------------------------------
    Content Close 
-------------------------------------------------------------------  */

function contentClose(name) {
  var elem = document.getElementById("CT-Mid").style;
  var fx = 4;
  contenthide();
  cb = setInterval(frame, 10);
  function frame() {
    if (fx <= 0) {
      Clear();
      contentOpen(name);
    } else {
      fx -= 0.02;
      elem.flex = fx;
    }
  }
}

/*  -------------------------------------------------------------------
    Content Display 
-------------------------------------------------------------------  */

function contentDisplay(name) {
  clearInterval(ct);

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