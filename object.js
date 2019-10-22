"use strict";

let profile={

    username: "Evi",
    lastname: "Tiraki",
    yearsOfExperience: 10,
    likesJava: true,
    hobbies: ['books','coding'],

    showHobbies: function(){
        console.log(this.hobbies[0],this.hobbies[1]);
    }
}

profile.showHobbies();

let newProfile = profile;

profile = null;
newProfile.showHobbies();

//Function contructor

function Box(valx,valy){
    this.x = valx;
    this.y = valy;
}

//{getArea: function(){...}}
Box.prototype.show = function(){
    console.log (this.x * this.y);
}

Box.prototype.getArea =  function(){
   console.log(this.x*this.y);
}

Box.prototype.getX = function(){
    return this.x;
}

//Box();
let box = new Box(5,15); // act like a class,first letter capital

let box2 = new Box(6,6);


box.getArea();
box2.getArea();

console.log(box);
console.log(box2);