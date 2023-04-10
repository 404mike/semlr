function is_in_asc_order(list) {
    if(list.length == 0) return true;
    
    for(var i = 0; i < list.length - 1; i++) {
        if(list[i] > list[i + 1]) return false;
    }

    return true;
}

// console.log(is_in_asc_order([1, 2])); // true
// console.log(is_in_asc_order([2, 2])); // true
// console.log(is_in_asc_order([1])); // true
// console.log(is_in_asc_order([])); // true
// console.log(is_in_asc_order([2, 1])); // false
// console.log(is_in_asc_order([1, 2, 3, 4])); // true
// console.log(is_in_asc_order([1, 2, 2, 4])); // true
// console.log(is_in_asc_order([1, 2, 1, 4])); // false
// console.log(is_in_asc_order([4, 2, 3, 4])); // false

module.exports = is_in_asc_order;