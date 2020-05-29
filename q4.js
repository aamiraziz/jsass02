var marks = 0;
var totalMarks = 0;
var percentage = 0;
var tmp = 0;

// This function will take obtained marks from user and shows the result
function result() {
    for (var i = 0; i < 3; i++) {
        marks = prompt("Enter subject " + (i + 1) + " Marks", "0")
        marks = parseFloat(marks)
        // document.write(`Marks obtained in this subject is: @{marks}<br />`)
        tmp = marks > 100 ? 99 : marks
        // document.write('Marks Obtained in this subject after if statement: ' + tmp + '<br />')
        totalMarks += tmp
        percentage = totalMarks/300 * 100
    }   
    
    document.write('<strong>Marks Obtained:</strong> ' + totalMarks + '<br />')
    computeGrade(percentage)
}

// This function will compute the grade according to obtained marks
function computeGrade(variable) {
    if (variable >= 80) {
        document.write("<strong>Percentage:</strong> " + variable + ".<br /><strong>Grade:</strong> A-One.<br /><strong>Remarks:</strong> Excellent.<br /><br /><br />")
    } else if (variable >= 70) {
        document.write("<strong>Percentage:</strong> " + variable + ".<br /><strong>Grade:</strong> A.<br /><strong>Remarks:</strong> Good.<br /><br /><br />")
    } else if (variable >= 60) {
        document.write("<strong>Percentage:</strong> " + variable + ".<br /><strong>Grade:</strong> B.<br /><strong>Remarks:</strong> You need to improve.<br /><br /><br />")
    } else if(variable < 60) {
        document.write("<strong>Percentage:</strong> " + variable + ".<br /><strong>Grade:</strong> Fail.<br /><strong>Remarks:</strong> Sorry.<br /><br /><br />")
    }
}