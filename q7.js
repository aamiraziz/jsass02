var a
var b 
var operator
var operation
var result

// a = document.getElementById('fnumber').value
// b = document.getElementById('lnumber').value
// operator = document.getElementById('operator').value 


// function calculate(var1, var2, op) {

//     a = var1; b = var2; operator = op;

//     console.log(a)
    
function calculate() {

    a = document.getElementById('fnumber').value
    b = document.getElementById('lnumber').value
    operator = document.getElementById('operator').value 

    if (operator == '+') {
        operation = "Sum"
        result = a + b
        alert(`The ${operation} of ${a} and ${b} is = ${result}`)
    } else if (operator == '-') {
        operation = "Subtraction"
        result = a - b
        alert(`The ${operation} of ${a} and ${b} is = ${result}`)
    } else if (operator == '/') {
        operation = "Division"
        result = a / b
        alert(`The ${operation} of ${a} and ${b} is = ${result}`)
    } else if (operator == '*') {
        operation = "Multiplication"
        result = a * b
        alert(`The ${operation} of ${a} and ${b} is = ${result}`)
    } else if (operator == '%') {
        operation = 'remainder'
        result = a % b
        alert(`The ${operation} of ${a} and ${b} is = ${result}`)
    } else {
        alert("Wrong Input")
    }
}

// function disply

// result = a + b

// document.write(`The addition of both numbers result is = ${result}`)


// this function will add two numbers

function addition(var1, var2) {
    var ans = var1 + var2
    document.write(`The sum of ${var1} and ${var2} is = ${ans}`)
    // return var1 + var2
}


