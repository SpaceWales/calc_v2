var value1 = 0;
var value2 = 0;
var op = "";
var solution = 0;

const display = document.getElementById('display');
let para = document.createTextNode("");

function enterValue(x){
    if(value1 == 0){
        //value1 should only be 0 after initialization and after = executed
        //this replaces 0 value
        value1 = x;
        para.textContent = value1;
    }
    else if(value1 !== 0 && op == ""){
        //add to value1
        value1 = value1 + x;
        para.textContent = value1;
    }
    else if(op !== "" && value2 == 0){
        //operator in place, value2 initialization
        value2 = x;
        para.textContent = value2;
    }
    else if(value1!==0 && value2!==0){
        value2 = value2 + x;
        para.textContent = value2;
    }
    display.appendChild(para);
    console.log(value1," value1");
    console.log(value2," value2");
    console.log(op," op");
    return;
}

function enterOperator(x){
    if(x == "="){
        solution = execute(value1,value2,op);
        para.textContent = solution;
        display.appendChild(para);
        console.log(solution);
        value1 = 0;
        value2 = 0;
        op = "";
        return;
    }
    else if(value1!== 0 && value2 == 0){
        //value1 is in use and value2 is empty
        return op = x;
    }
    else if(op!== ""){
        //already an operator in use,
        //need to calculate
        solution = execute(value1,value2,op);
        para.textContent = solution;
        display.appendChild(para);
        console.log(solution);
        //need to reset for another operator
        value1 = solution;
        value2 = 0;
        return op = x;
    }
}

function execute(x,y,op){
    let sum = 0;
    switch(op) {
        case '+':
            sum = add(x,y);
            break;
        
        case '-':
            sum = subtract(x,y);
            break;
        
        case '*':
            sum = multiply(x,y);
            break;
        
        case '/':
            sum = divide(x,y);
            break;
        
        case '%':
            sum = remainder(x,y);
            break;
        
        case '^':
            sum = squared(x,y);
            break;
        
        default: break;
    }
    let str = sum.toFixed(2);
    sum = parseFloat(str);
    return sum;
}

function clearDisplay(x){
    if(x == "ac"){
        //all clear
        value1 = 0;
        value2 = 0;
        solution = 0;
        op = "";
        para.textContent = "";
        display.appendChild(para);
    }
    if(x == "de"){
        //delete single character
        //trickiiier
        console.log("in de");
        let temp = para.wholeText;
        let x = parseInt(temp,10);
        console.log(temp, "-temp");
        if(x == value1){
            //remove from value1
            console.log("in de value1 temp:", temp);
            value1 = Math.floor(x/10);
            console.log(value1);
            para.textContent = value1;
        }
        if(x == value2){
            //remove from value2
            console.log("in de value2 temp:", temp);
            value2 = Math.floor(x/10);
            console.log(value2);
            para.textContent = value2;
        }
        display.appendChild(para);
    }
}

function add(x,y){
    return (x) + (y);
}
function subtract(x,y){
    return (x) - (y);
}
function multiply(x,y){
    return (x) * (y);
}
function divide(x,y){
    if(x == 0 || y == 0){
        return alert("cant divide by 0");
    }
    return (x) / (y);
}
function remainder(x,y){
    return (x) % (y);
}
function squared(x,y){
    //have as ^
    return Math.pow(x,y);
}




