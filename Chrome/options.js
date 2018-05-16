var store = {};
browser.storage.local.get(null, function (x) { console.log(x); store = x; });
alert(x);
if (store.troll === "yes") {
    document.getElementById("check").attributes["checked"] = "checked";
}

document.getElementById("check").addEventListener("checked", function () {
    var check = document.getElementById("check").attributes["checked"];
    if (check) {
        store.troll = "yes";
    }
    else {
        store.troll = "no";
    }

    browser.storage.local.set(store, function (x) { console.log(x); });
});