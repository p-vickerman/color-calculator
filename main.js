const prompt = require('prompt-sync')({signit: true});

let choice = prompt("Please select  'c' to combine colors or 'd' to deconstruct colors: ")

if (choice === 'c'){
    let color = prompt("Please select either 'red' 'blue' or 'yellow'");
    let color1 =prompt("Please select either 'red' 'blue' or 'yellow'");

if (color + color1 === ("red" + "blue") || color + color1 === ("blue" + "red")){
    console.log("Red and blue make purple")}
    else if (color + color1 === ("red" + "yellow") || color + color1 === ("yellow" + "red")){
        console.log("Red and yellow make orange")
    } else if (color + color1 === ("blue" + "yellow") || color + color1 === ("yellow" + "blue")){
        console.log("Blue and yellow make green")
    } else {
        console.log("Error")
    }



} else if (choice === 'd'){
    color2 = prompt("Please select either 'purple' 'orange' or 'green'")
     if(color2 === ('purple')){
        console.log("Purple is made up of red and blue")
    } else if(color2 === ('orange')){
        console.log("Orange is made up of red and yellow")
    } else if(color2 === ('green')){
        console.log("Green is made up of blue and yellow")
    } else {
        console.log("Error")
    }
}


