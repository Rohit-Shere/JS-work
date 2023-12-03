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
console.log(loginUserMessage())


