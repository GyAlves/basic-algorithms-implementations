
function binary_search (items, value){
    
    // keep track of the low, high and mid
    let low = 0;
    let high = items.length - 1;
    let mid;
    let guess;

    // a loop for iterating through the array until the value if found or if not return null
    while (low <= high){
        
        mid = Math.floor((low + high) / 2);
        guess = items[mid];

        if (guess === value) return guess;
        if (guess > value) high = mid - 1;
        if (guess < value) low = mid + 1;
    }

    return null;
}

module.exports = binary_search;