// rest param  bst3melo 3shan lama ageb value mn function w a7to fee array 
function getMinMax(...arr) {   
    return {
        min: Math.min(...arr), // math.min de btrg3 as8er value mowgoda
        max: Math.max(...arr)  // Spread Operator(....arr)
    };
}

//spread 3shnan afok el array w ashof el gowa


let numbers = [10, 50, 3, 90, 25, 1, 70];

let result = getMinMax(...numbers);

console.log("min value =", result.min);
console.log("max value =", result.max);





