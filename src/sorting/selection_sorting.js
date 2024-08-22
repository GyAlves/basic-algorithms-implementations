
function selection_sorting(items){
    let largest_index;
    const items_length = items.length - 1;

    for(let items_counter = 0; items_counter <= items_length; items_counter++) {
        largest_index = items_counter;

        for(let counter = items_counter + 1; counter <= items_length; counter++){
            if(items[counter] > items[largest_index]) {
                largest_index = counter;
            }
        }

        if(largest_index !== items_counter){
            let swap = items[items_counter];
            items[items_counter] = items[largest_index];
            items[largest_index] = swap;
        }
    }
    return items;
}

module.exports = selection_sorting;