var Landing = true;
var lastPress = null;
var width = window.innerWidth;


const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

let buttonClick = async (name) => {
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

let ButtonClose = async (name) => {
    var exitB = document.getElementsByClassName("exit")[0].style;
    var main = document.getElementsByTagName("main")[0].style;
    main.top = "-100vh";
    scrolldown();
    lastPress = null;
    exitB.display = "none";
    let delayres = await delay(3000);
    Landing = !Landing;
    closeContent();
    main.top = "0dvh";
}

function scrollUp() {
    var main = document.getElementsByTagName("main")[0].style;
    main.animationName = "none";

    requestAnimationFrame(() => {
        main.animation = "scroll 1.5s linear 1s 1 normal forwards";
    })
}

function scrolldown() {
    var main = document.getElementsByTagName("main")[0].style;
    main.animationName = "none";

    // if (width < 600) {
    //     console.log(width);
    //     main.top = "-105vh";
    // }
    // else {
    //     main.top = "-100vh"
    // }
    main.top = "-100dvh"

    requestAnimationFrame(() => {
        main.animation = "scroll 1.5s linear 1s 1 reverse forwards";
    })
}

let openContent = async () => {
    var docContent = document.getElementsByClassName("Content")[0].style;
    docContent.animationName = "none";
    // if (width < 600) {
    //     console.log(width);
    //     docContent.gridTemplateRows = "5% 0% 5%";
    // }
    // else {
    //     docContent.gridTemplateRows = "10vh 0vh 10vh";
    // }
    docContent.gridTemplateRows = "10% 0% 10%";
    let delayres = await delay(400);

    requestAnimationFrame(() => {
        docContent.animation = "close 1.5s linear 0s 1 reverse forwards";
    })

}

const closeContent = async () => {
    var docContent = document.getElementsByClassName("Content")[0].style;
    docContent.animationName = "none";
    // if (width < 600) {
    //     console.log(width);
    //     docContent.gridTemplateRows = "5% 70% 5%";
    // }
    // else {
    //     docContent.gridTemplateRows = "10vh 70vh 10vh";
    // }
    docContent.gridTemplateRows = "10% 80% 10%";

    let delayres = await delay(400);

    requestAnimationFrame(() => {
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

/*  -------------------------------------------------------------------
    Phone Functions 
-------------------------------------------------------------------  */
