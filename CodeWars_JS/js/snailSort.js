snail = function (array) {
    
    
    var result = [];
    while (array.length != 0) {

        // first always right order
        result.push(array[0]);
        array.splice(array[0], 1);

        if (array.length != 0) {
            // second always the last 
            for (var i = 0; i < array.length; i++) {
                var last = array[i][array[i].length - 1]
                result.push(last);
                array[i].splice(array[i].length - 1, 1);

            }
            // third last in restarray reversed order
            var order = array[array.length - 1].reverse();
           
            result.push(order);
            array.splice(array.length - 1, 1)

            //four aways first reversed
            for (var i = array.length -1; i >= 0; i--) {
                var first = array[i][0]
                

                result.push(first);
                array[i].splice(array[0], 1);

            }
        }
       
    }
    var myNewArray = [].concat.apply([], result);
    return myNewArray;
}

//array = [[1, 2, 3, 5],
//         [8, 9, 4, 6],
//         [7, 2, 5, 7]
//         [7, 6, 3, 7]]

//snail(array) #=> [1, 2, 3, 5, 6, 7, 7, 3, 6, 7, 7, 8, 9, 4, 5, 2 ]

//array = [[1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]]


//snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

//array = [[1, 2, 3],
//         [8, 9, 4],
//         [7, 6, 5]]

//snail(array) #=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
