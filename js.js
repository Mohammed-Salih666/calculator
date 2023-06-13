const add = (num1, num2) => num1 + num2; 
const sub = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2;
const evaluate = () => {
    display.textContent = operate(operation, nums[0], nums[1]);
}

const operate = (type, num1, num2) => {
    let result ; 
    type === 1 ? result = add(num1, num2) :
    type === 2 ? result = sub(num1, num2) : 
    type === 3 ? result = multiply(num1, num2) : 
    result = divide(num1, num2);   
    return result; 
}


const operations = document.querySelectorAll(".operation");
const display = document.querySelector("#display");  
let num1, num2 ;
const nums = new Array(2);
let clicks = 0; 
let operation;

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        if(clicks != 2) {
            operation.textContent == "+" ? operation = 1 :
            operation.textContent == "-" ? operation = 2 : 
            operation.textContent == "x" ? operation = 3 : 
            operation = 4;

            nums[clicks] = Number.parseInt(display.textContent);
            display.textContent = ""; 
            clicks++;
        }
        else {
            evaluate();
        }
    });
});

const equals = document.querySelector("#equals"); 

equals.addEventListener("click", evaluate);