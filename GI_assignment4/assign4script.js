//Practice with JavaScript OOP
//number 1
/*
var ANIMAL = {
    Dog: function () {
        "use strict";
    },
    Cat: function () {
        "use strict";
    }
};
*/

//number 2
/*
var Cat = {
    sound: "meow"
};
var Dog = function () {
    "use strict";
    this.sound = "borkbork";
};
//number 3
var fluffy = new Dog();
*/
//number 4
/*
var ANIMAL = function () {
    "use strict";
    console.log("The Animal has been created");
};
ANIMAL();
*/

//NUMBER 5
/*
var ANIMAL = function (string) {
    "use strict";
    console.log(string);
};
ANIMAL("The ANIMAL has been created...again!");
*/

//number 6

var Animal = function (type, breed, height, length) {
    "use strict";
    this.type =  type;
    this.breed = breed;
    this.height = height;
    this.length = length;
    window.console.log("It's a " + type + " !");
};

//number 7
function showObjProps(obj) {
    var result = "";
    for (var p in obj) {
        if (obj.hasOwnProperty(p) ) { 
            result += p + "," +obj[p] + "\n";
    }
    return result;
    }
}
console.log(showObjProps(Animal));

//number 8
var speak = function (){
    if (Animal['type'] == "dog"){
        console.log("The "+ color + " dog is barking!");
    }
    else if (Animal['type'] == "cat") {
        console.log("The "+ color + " cat is meowing!");
    }
    
}

