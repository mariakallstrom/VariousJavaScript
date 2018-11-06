function solution(list) {
    var result = ""
    var rangeArr = [];
    var count = 0;
    var arr = [];

    for (var i = 0; i < list.length; i++) {

        if (rangeArr.length === 0) {
            rangeArr.push(list[i])
        }
        else {
            if (Math.max.apply(null, rangeArr) +1 == list[i]) {
                rangeArr.push(list[i]);
            }
            else {
                arr.push(rangeArr);
                rangeArr = [list[i]];
            }
        }
     
    }
    arr.push(rangeArr);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            result += "," + arr[i][0] + "-" + arr[i][arr[i].length -1];
        }
        if (arr[i].length < 3) {
            result += "," + arr[i].toString();
        }
     
    }
    result = result.substring(1);
    return result.trim();
}

//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) // "-6,-3-1,3-5,7-11,14,15,17-20")