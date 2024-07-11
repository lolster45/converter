const input = document.getElementById("input"); 
const result = document.getElementById("result"); 

const inputType = document.getElementById("inputType");
const resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult () {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) /1000;
    } 
    else if (inputTypeValue ==="meter" && resultTypeValue === "meter") {
        result.value = input.value;
    }
    else if (inputTypeValue ==="kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) *1000;
    }  
    else if (inputTypeValue ==="kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value;
    } 
    else if (inputTypeValue ==="Ibs" && resultTypeValue === "Kg") {
        result.value = Number(input.value) /2.2;
    } 
    else if (inputTypeValue ==="Kg" && resultTypeValue === "Ibs") {
        result.value = Number(input.value) *2.2;
    } 
}
