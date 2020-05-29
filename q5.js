var num = 5
var input
// var check = input <= 10 ? input : NaN

function game(secretNumber, input) {
    while(true) {
        input = prompt('Please enter number form 0 to 10', 0)
        input = parseInt(input)
        if (input === num) {
            document.write('Bingo! Correct Answer<br />')
            exit()
        } else if (input === num + 1) {
            document.write('Close enough to the correct answer<br />')
        } else {
            continue
        }
    }
}