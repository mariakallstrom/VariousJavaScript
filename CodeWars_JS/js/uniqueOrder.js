function uniqueInOrder (iterable) {
    //your code here - remember iterable can be a string or an array
   // var result = iterable;

    if (typeof iterable === typeof "") {
        iterable = iterable.split('');
    }
    var newArray = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            newArray.push(iterable[i])
        }
    }
    return newArray;
}

