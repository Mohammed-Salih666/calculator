const add = (num1, num2) => num1 + num2; 
const sub = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2;

let evaluated = false; 
const evaluate = () => {

    display.value = operate(currentOperation, num1, num2);
    num1 = Number.parseInt(display.value); 
    console.log(currentOperation + "    " + num1 + "   " + num2 ); 
    currentOperation = nextOperation;
    nextOperation = null;
    evaluated = true; 

}

const operate = (type, num1, num2) => {
    let result ; 
    type === 1 ? result = add(num1, num2) :
    type === 2 ? result = sub(num1, num2) : 
    type === 3 ? result = multiply(num1, num2) : 
    result = divide(num1, num2);   
    return result; 
}

const display = document.querySelector("#display");  

const numButtons = document.querySelectorAll(".number");

numButtons.forEach(number => {
    number.addEventListener("click", () => {
        display.value += number.textContent;

     if(evaluated){
        display.value = number.textContent; 
        evaluated = false;
     }

    });
});


const operations = document.querySelectorAll(".operation");
let clicks = 0; 
let operationType;
let clicked = false; 

const equals = document.querySelector("#equals"); 

equals.addEventListener("click", () => {
    // nums[1] = Number.parseInt(display.value); 
    // evaluate();
    // clicks--;
    num2 = Number.parseInt(display.value); 
    evaluate();
    currentOperation = null; 
});

let currentOperation = null;
let nextOperation = null;
let num1 = null;
let num2 = null;

operations.forEach(operation => {

    operation.addEventListener("click", () => {

        const op = operation.textContent === "+" ? 1
        : operation.textContent === "-" ? 2 
        : operation.textContent === "x" ? 3
        : 4; 

        if(num1 === null && currentOperation === null) {
            num1 = Number.parseInt(display.value); 
            currentOperation = op;
            display.value = "";
        }
        else if (nextOperation === null){
            num2 = Number.parseInt(display.value);
            nextOperation = op; 
            // display.value =" ";
            evaluate();
        }
        else if(currentOperation !== null) {
            num2 = Number.parseInt(display.value);
            evaluate();
        }
        

    });

} );