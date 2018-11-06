function sortArray(array) {
    // Return a sorted array.
    if (array.lenght === 0) {
        return array;
    }
    var odd = [];
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 && array[i] !== 0) {
            //odd
            odd.push(array[i]);
        }
    }
    var oddSort = odd.sort(function (a, b) { return a - b });
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(oddSort[index]);
            index++;
        }
        else {
            newArray.push(array[i]);
        }
    }

    console.log(newArray);
}