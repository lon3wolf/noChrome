var store = {};
var Retries = 0;
var FoundEl = 0;

var classString = [
    { id: "ytd-mealbar-promo-renderer-message-title style-scope ytd-mealbar-promo-renderer", type: "class" },
    { id: "style-scope ytd-popup-container", type: "class" },
    { id: "style-scope ytd-mealbar-promo-renderer", type: "class" },
    { id: "gb_fa gb_g", type: "class" }
];

function InitStore() {
    browser.storage.local.get(null, function (x) {
        console.log(x);
        store = x;
    });
}

function HideNag() {
    // InitStore();
    Retries++;
    FoundEl = 0;
    var troll = store.troll;
    for (i = 0; i < classString.length; i++) {
        var el = null;
        console.log(classString[i].id + " : " + classString[i].type + " Retries: " + Retries + " Found: " + FoundEl);
        if (classString[i].type === "class")
            el = document.getElementsByClassName(classString[i].id);
        if (classString[i].type === "id")
            el = document.getElementById(classString[i].id);

        var x = "D`oh!";

        if (el.length === 1) {
            FoundEl = 1;
            console.log("Found ==> " + el[0].attributes.style);
            x = el[0].innerHTML;
            el[0].innerHTML = "";
            debugger;
            el[0].attributes.style = "display:none;";
            el[0].removeAttribute("class");
            var parent = el[0].parentElement;
            parent.removeChild(parent.firstChild);
            if (Retries < 5)
            {
                setTimeout(HideNag, 2000);
            }

            break;
        }
    }

    if (FoundEl === 0 && Retries < 5) {
        console.log("rerun");
        setTimeout(HideNag, 800);
    }
}

console.log("!Chrome loaded");
setTimeout(HideNag, 500);
//setTimeout(YTHide, 600);


//function ChromeHide()
//{
//    GRetries++;

//    var troll = store.troll;
//    var el = document.getElementsByClassName("gb_fa gb_g");
//    var x = "D`oh!";

//    if (el.length === 1)
//    {
//        x = el[0].innerHTML;
//        el[0].innerHTML = "Edge is best";
//        if (troll !== "yes") {
//            el[0].style = "display:none;";
//        }
//    }
//    else
//    {
//        if(GRetries < 5)
//            setTimeout(ChromeHide, 500);
//    }
//}

//function YTHide() {
//    YTRetries++;
//    debugger;
//    var el = document.getElementsByClassName("style-scope ytd-popup-container");
//    var x = "D`oh!";
//    if (el.length === 1) {
//        x = el[0].innerHTML;
//        el[0].innerHTML = "Edge is best";
//        el[0].style = "display:none;";
//    }
//    else
//    {
//        if (YTRetries < 5)
//            setTimeout(YTHide, 500);
//    }
//}

