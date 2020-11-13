let array = []
for (let i = 0; i <= 100; i++) {
    array.push(i)
}

function normalSearchMethod(val, arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log('Attempting normal search')
        if (val == arr[i]) { 
            return i
         }
    }
    return -1
}



function binarySearchMethod(val, arr) {
    let lower = 0;
    let upper = arr.length - 1;
    while (lower <= upper) {
        console.log("Attempted binary search")
        const middle = lower + Math.floor((upper - lower) / 2);
        if (val == arr[middle]) return middle;
        if (val < arr[middle]) upper = middle - 1;
        else lower = middle + 1;
        
    }
    return false;
}

//console.log(normalSearchMethod(99, array))

console.log(binarySearchMethod(99, array))
