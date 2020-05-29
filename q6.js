
function evenOdd() {
    var input = prompt('Enter the number', 0)

    input = parseInt(input)

    if (input%2 === 0) {
        document.write('The entered number is even number')
    } else {
        document.write('The entered number is odd')
    }
}