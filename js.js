const add = (num1, num2) => num1 + num2; 
const sub = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2;
const evaluate = () => {
    display.value = operate(operationType, nums[0], nums[1]);
    console.log(operationType + "     " + nums[0] + "   " + nums[1]);
    nums[0] = Number.parseInt(display.value);

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
let num1, num2 ;
const nums = new Array(2);

const numButtons = document.querySelectorAll(".number");

numButtons.forEach(number => {
    number.addEventListener("click", () => {
        display.value += number.textContent;

        if(clicked){
            display.value = number.textContent;
            clicked = false;
        }
    });
});


const operations = document.querySelectorAll(".operation");
let clicks = 0; 
let operationType;
let clicked = false; 

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        if(clicks !== 2 && !clicked) {
            operation.textContent == "+" ? operationType = 1 :
            operation.textContent == "-" ? operationType = 2 : 
            operation.textContent == "x" ? operationType = 3 : 
            operationType = 4;

            console.log(operationType);

            nums[clicks] = Number.parseInt(display.value);
            display.value = ""; 
            clicked = true; 
            clicks++;
        }
        if(clicks === 2) {
            evaluate();
            clicks--;
        }
    });
});

const equals = document.querySelector("#equals"); 

equals.addEventListener("click", () => {
    nums[1] = Number.parseInt(display.value); 
    evaluate();
    clicks--;
});