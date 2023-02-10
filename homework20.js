let a = prompt("Enter a firs number", 'number');
let b = prompt("Enter a second number",'number');

function maxNumber(a, b){

    while(!+a || !+b){
        a = prompt("Enter a firs number", 'number');
        b = prompt("Enter a second number",'number');
    }

    return a == b 
        ? "a = b"
        : a > b
        ? a
        : b;
}

alert (maxNumber(a, b));



let number = prompt ("Enter a number", '');

function reverse (number){

    while (!+number){
        number = prompt ("Enter a number", '');
    }
    return number * -1;
}
alert (reverse(number));



let secondNumber = prompt ("Enter the number", '');
let count = prompt ("Enter the number", '');

function three (secondNumber, count){
    for(let i = 0; i < count; i++){
        secondNumber += 3;
    }
    return secondNumber;
}
alert (three(+secondNumber, +count));



let km = prompt ("Enter a km for conver", 'km');
    while(!+km){
        km = prompt ("Enter only number for convert 'km'", "number");
    }
let metric = prompt ("Specify the metric to be converted: 'm' or 'cm'", '');

let KmToM = () => alert(`${km * 1000} m`);

let KmToCm = () => alert(`${km * 100000} cm`);

function getMetric(metric, m, cm){

    return metric == 'm'
    ? m()
    : metric == 'cm'
    ? cm()
    : alert(`"${metric}" is not a metric. Enter a corect metric 'm' or 'cm'`);
}
getMetric(metric, KmToM, KmToCm);