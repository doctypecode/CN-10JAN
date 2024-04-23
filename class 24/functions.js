// function printName(name){
//     // Argument Object
//     console.log(arguments, name)
// }

const printFullName = () => {
    // No Argument Object is created by JS
    console.log("Kapil")
}

// functions - First Class Objects [It can be returned, It can be passed as an argument, it will be hoisted]


// Web API
document.getElementById("inc").addEventListener('click', () => {
    incrementCount(sendNotificationToUser("Coding"))

    //  incrementCount(function(){
    //     alert("Update "+name)
    // })
})



function sendNotificationToUser(name){
    return function(){
        alert("Update "+name)
    }
}

//  const sum = () => {}
//  function sum(){}
let count = 0;

const incrementCount = (someRandomFunction) => {
    count++;
    if(count === 2){
        someRandomFunction(); // printFullName()
    }
    console.log(count)
}


// const sum = (a, b) => console.log("Arrow Function", a)


// sum(10);

// incrementCount [parameter - sendNotificationToUser] - someRandomFunction - someRandomFunction()

// 16 -> 29 -> 32 -> 21

// Client -> Server

// Client -> Machine 2

// machine 1 - Server 1

// machine 2 -> machine 1

// Origin 1 -> Origin 2

// WhiteList -> []





