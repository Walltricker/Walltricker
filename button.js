var Landing = true;
var lastPress = null;
var width = window.innerWidth;
var animationStatus = false;


const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

let buttonClick = async (name) => {
    if (animationStatus) {
        return;
    }

    let delayres = null;
    var exitB = document.getElementsByClassName("exit")[0].style;

    iconDisplay("Clear");
    iconDisplay(name);

    if (lastPress == name) {
        console.log(`Button press $(name) already pressed`);
    }
    else if (Landing) {
        animationStatus = true;
        scrollUp();
        Landing = !Landing;
        lastPress = name;
        contentDisplay(name);
        delayres = await delay(3000);
        openContent();
        exitB.display = "inline";
        delayres = await delay(1000);
        animationStatus = false;
    }
    else {
        animationStatus = true;
        lastPress = name;
        console.log(`it got to the close section`);
        closeContent();
        delayres = await delay(3000);
        contentDisplay(name);
        openContent();
        delayres = await delay(1000);
        animationStatus = false;
    }
    console.log(Landing);
};

let ButtonClose = async (name) => {
    if (animationStatus) {
        return;
    }
    animationStatus = true;
    var exitB = document.getElementsByClassName("exit")[0].style;
    var main = document.getElementsByTagName("main")[0].style;
    main.top = "-100vh";
    iconDisplay("Clear");
    scrolldown();
    lastPress = null;
    exitB.display = "none";
    let delayres = await delay(3000);
    Landing = !Landing;
    closeContent();
    main.top = "0dvh";
    delayres = await delay(1000);
    animationStatus = false;
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

    var venueimg = document.getElementById("Venue-unclicked");
    var Taxiimg = document.getElementById("Taxi-unclicked");
    var Photosimg = document.getElementById("Photos-unclicked");
    var Entertainmentimg = document.getElementById("Entertainment-unclicked");
    var RSVPimg = document.getElementById("RSVP-unclicked");

    venue.display = "None";
    Taxi.display = "None";
    RSVP.display = "None";
    Photos.display = "None";
    Entertainment.display = "None";

    switch (name) {
        case "Venue":
            venue.display = "flex";
            venueimg.src = "/resources/ICONS/Venue-click.png";
            break;
        case "Taxi":
            Taxi.display = "flex";
            Taxiimg.src = "/resources/ICONS/Hotel-click.png";
            break;
        case "RSVP":
            RSVP.display = "flex";
            RSVPimg.src = "/resources/ICONS/RSVP-click.png";
            break;
        case "Photos":
            Photos.display = "flex";
            Photosimg.src = "/resources/ICONS/About-click.png";
            break;
        case "Entertainment":
            Entertainment.display = "flex";
            Entertainmentimg.src = "/resources/ICONS/FAQ-click.png";
            break;
        case "Clear":
            Taxiimg.src = "resources/ICONS/Hotel.PNG";
            venueimg.src = "/resources/ICONS/Venue.PNG";
            RSVPimg.src = "/resources/ICONS/RSVP.png";
            Photosimg.src = "resources/ICONS/About.PNG";
            Entertainmentimg.src = "resources/ICONS/FAQ.PNG";
            console.log("Clear")
        default:
            console.log("Error");
    }
}


function iconDisplay(name) {
    var venueimg = document.getElementById("Venue-unclicked");
    var Taxiimg = document.getElementById("Taxi-unclicked");
    var Photosimg = document.getElementById("Photos-unclicked");
    var Entertainmentimg = document.getElementById("Entertainment-unclicked");
    var RSVPimg = document.getElementById("RSVP-unclicked");

    switch (name) {
        case "Venue":
            venueimg.src = "/resources/ICONS/Venue-click.png";
            break;
        case "Taxi":
            Taxiimg.src = "/resources/ICONS/Hotel-click.png";
            break;
        case "RSVP":
            RSVPimg.src = "/resources/ICONS/RSVP-click.png";
            break;
        case "Photos":
            Photosimg.src = "/resources/ICONS/About-click.png";
            break;
        case "Entertainment":
            Entertainmentimg.src = "/resources/ICONS/FAQ-click.png";
            break;
        case "Clear":
            Taxiimg.src = "resources/ICONS/Hotel.PNG";
            venueimg.src = "/resources/ICONS/Venue.PNG";
            RSVPimg.src = "/resources/ICONS/RSVP.png";
            Photosimg.src = "resources/ICONS/About.PNG";
            Entertainmentimg.src = "resources/ICONS/FAQ.PNG";
            console.log("Clear")
        default:
            console.log("Error");
    }
}

/*  -------------------------------------------------------------------
    icon button 
-------------------------------------------------------------------  */


/*  -------------------------------------------------------------------
    Phone Functions 
-------------------------------------------------------------------  */
