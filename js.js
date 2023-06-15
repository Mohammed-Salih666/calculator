const add = (num1, num2) => num1 + num2; 
const sub = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2;

let evaluated = false; 
const evaluate = () => {

    display.textContent = operate(currentOperation, num1, num2);
    num1 = Number.parseInt(display.textContent); 
    console.log(currentOperation + "    " + num1 + "   " + num2 ); 
    if(nextOperation !== null){
        currentOperation = nextOperation;
        nextOperation = null;
    }
    else {
        currentOperation = null;
    }
    evaluated = true; 

}

const operate = (type, num1, num2) => {
    let result =
    type === 1 ? add(num1, num2) 
    : type === 2 ? sub(num1, num2)  
    : type === 3 ? multiply(num1, num2)  
    : divide(num1, num2);  

    return result; 
}

const display = document.querySelector("#display");  

const numButtons = document.querySelectorAll(".number");

numButtons.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;

     if(evaluated){
        display.textContent = number.textContent; 
        evaluated = false;
     }

    });
});


const operations = document.querySelectorAll(".operation");
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

        if(num1 === null) {
            num1 = Number.parseInt(display.textContent); 
        }
        if(currentOperation === null) {
            currentOperation = op;
            display.textContent = "";
        }
        else if (nextOperation === null){
            num2 = Number.parseInt(display.textContent);
            nextOperation = op; 
            evaluate();
        }
        else if(currentOperation !== null) {
            num2 = Number.parseInt(display.textContent);
            evaluate();
        }
        

    });

} );

const equals = document.querySelector("#equals"); 

equals.addEventListener("click", () => {

    if(currentOperation !== null){
        num2 = Number.parseInt(display.textContent);
        evaluate();
    }
    

});

const clear = document.querySelector("#delete");

clear.addEventListener("click", () => {
    display.textContent = "0"; 
    num1 = null; 
    num2 = null; 
    currentOperation = null; 
    nextOperation = null; 
});

const backspace = document.querySelector("#backspace");

backspace.addEventListener("click", () => {

        display.textContent = display.textContent.slice(0, -1);

        if(display.textContent.length > 0) {
            num1 = Number.parseInt(display.textContent);
        }
});


// the following code is all for style 

const allButtons = document.querySelectorAll('button');
const operationColor = "rgb(248, 253, 208)";
allButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = generateRandomColor();
    });
    button.addEventListener("mouseout", () => {
        const att = button.getAttribute('class');

        button.style.backgroundColor = 
        att === "number" ? "white" 
        : att === "operation" ? operationColor
        : button.getAttribute('id') === "equals" ? "rgb(255, 123, 0)"
        : "antiquewhite";

    

    });
});

const generateRandomColor = () => {

    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        return `rgb(${r}, ${g}, ${b})`;
    
}