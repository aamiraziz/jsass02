// part a of question 3
function vara() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
}


// part b of question 3
function varb() {
    var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
    }
}


// part c of question 3
function varc() {
    var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    }
    if (c === 13){
        alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
    }
    if(c === 14){
        alert("condition 4 is true");
    }
}


// part d of question 3
function materialCost() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
    }
}


// part e of question 3
function trueFalse() {
    if (true){
        alert("True");
    }
    if (false){
        alert("False");
    }
}


// part f of question 3
function car() {
    if("car" < "cat"){
        alert("car is smaller than cat");
    }
}