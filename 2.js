// Make a function that does arithmetic!

function arithmetic(a, b, operator){
    switch(operator){
        case "add":
        return a + b
        case "subtract":
        return a - b
        case "multiply":
        return a * b
        case "divide":
        return a / b
        default:
        return "No such result"
    }
}
console.log(arithmetic(5, 3, "add"))
module.exports = arithmetic