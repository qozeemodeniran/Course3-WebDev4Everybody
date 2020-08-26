var names = [];

function loadFruits() {
    document.getElementById("names").innerHTML = names;
}

function addName() {
    var name = prompt("What name would you like to add? ");
    names[names.length] = name + '<br/>';
    document.getElementById("names").innerHTML = names;
}