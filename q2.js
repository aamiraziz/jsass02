var signal = prompt("Enter the road traffic signal. Select only Red, Yellow and Green: ", "Red")

function display(trafficSignal){
    if (signal == 'Red' || signal == 'red'){
        document.write('Must Stop')
    } else if (signal == 'Yellow' || signal == 'yellow') {
        document.write('Ready to move')
    } else if(signal == 'Green' || signal == 'green') {
        document.write('Move now')
    } else {
        document.write('Wrong Input. Try again')
    }
}