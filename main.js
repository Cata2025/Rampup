
function Fibonacci (number1,number2,number3){
    let arrFibonacci = [number1,number2];
    let lastNumber = number2;
    let secondToLastNumber = number1;
    while (lasNumber + secondToLastNumber<number3)

    {
        arrFibonacci.push(lastNumber + secondToLastNumber);
        secondToLastNumber = lastNumber;
        lastNumber = lastNumber + secondToLastNumber;
    }
    return arrFibonacci;
}
console.log(Fibonacci(5,3,200));

