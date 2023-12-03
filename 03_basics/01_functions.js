function sayMyName(){
    console.log("R")
    console.log("O")
    console.log("H")
    console.log("I")
    console.log("T")
}

// sayMyName()

// function addTwoNums (num1, num2){
//     console.log(num1+num2)
// }

function addTwoNums(num1, num2){
    let result = num1+num2
    
    return result
}

const result =addTwoNums(4,3)

// console.log(result)

function loginUserMessage(username="user"){
    if ( !username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

function calculateCartPrice (val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Rohit",
    Price :199
}

function handleObject(anyObject ){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.Price} `);
}

handleObject(user)

const myNewArray = [200,400,100,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,500]));

