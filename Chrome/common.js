function getStorage() {
    var a = browser;
    var b = a.storage;
}

function Save(keyvalue) {
    var b = getStorage();
    if (b) {
        b = b.local;
        b.set(keyvalue);
    }
}

function Get(key) {
    var b = getStorage();
    if (b) {
        b = b.local;
        return b.get(key);
    }

    return null;
}

function Set(key, value) {
    var ob = {};
    ob[key] = value;
    Save(ob);
}


function GetTroll() {
    var troll = Get("troll");
    if (troll)
        return troll;
    else
        return "no";
}

function SetTroll(val) {
    Set("troll", val);
}