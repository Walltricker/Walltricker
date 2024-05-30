var Landing = true;
var lastPress = null;


const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

const buttonClick = async (name) => {
    let delayres = null;
    var exitB = document.getElementsByClassName("exit")[0].style;

    if (lastPress == name) {
        console.log(`Button press $(name) already pressed`);
    }
    else if (Landing) {
        scrollUp();
        Landing = !Landing;
        lastPress = name;
        contentDisplay(name);
        delayres = await delay(3000);
        openContent();
        exitB.display = "inline";
    }
    else {
        lastPress = name;
        console.log(`it got to the close section`);
        closeContent();
        delayres = await delay(3000);
        contentDisplay(name);
        openContent();
    }
    console.log(Landing);
};

const ButtonClose = async (name) => {
    var exitB = document.getElementsByClassName("exit")[0].style;
    var main = document.getElementsByTagName("main")[0].style;
    main.top = "-100vh";
    scrolldown();
    lastPress = null;
    exitB.display = "none";
    let delayres = await delay(3000);
    Landing = !Landing;
    closeContent();
    main.top = "0vh";
  }

function scrollUp() {
    var main = document.getElementsByTagName("main")[0].style;
    main.animationName ="none";

    requestAnimationFrame (() => {
        main.animation = "scroll 1.5s linear 1s 1 normal forwards";
    })
}

function scrolldown() {
    var main = document.getElementsByTagName("main")[0].style;
    main.animationName ="none";

    requestAnimationFrame (() => {
        main.animation = "scroll 1.5s linear 1s 1 reverse forwards";
    })
}

function openContent() {
    var docContent = document.getElementsByClassName("Content")[0].style;
    docContent.animationName ="none";
    docContent.gridTemplateRows = "10vh 0vh 10vh";

    requestAnimationFrame (() => {
        docContent.animation = "close 1.5s linear 0s 1 reverse forwards";
    })
    
}

function closeContent() {
    var docContent = document.getElementsByClassName("Content")[0].style;
    docContent.animationName ="none";
    docContent.gridTemplateRows = "10vh 0vh 10vh";

    requestAnimationFrame (() => {
        docContent.animation = "close 1.5s linear 0s 1 normal forwards";
    })
}

/*  -------------------------------------------------------------------
    Content Display 
-------------------------------------------------------------------  */

function contentDisplay(name) {
    var venue = document.getElementById("Venue").style;
    var Taxi = document.getElementById("Taxi").style;
    var RSVP = document.getElementById("RSVP").style;
    var Photos = document.getElementById("Photos").style;
    var Entertainment = document.getElementById("Entertainment").style;

    venue.display = "None";
    Taxi.display = "None";
    RSVP.display = "None";
    Photos.display = "None";
    Entertainment.display = "None";

    switch (name) {
        case "Venue":
            venue.display = "flex";
            break;
        case "Taxi":
            Taxi.display = "flex";
            break;
        case "RSVP":
            RSVP.display = "flex";
            break;
        case "Photos":
            Photos.display = "flex";
            break;
        case "Entertainment":
            Entertainment.display = "flex";
            break;
        default:
            console.log("Error");
    }
}
