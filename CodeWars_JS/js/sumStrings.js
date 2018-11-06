function sumStrings(a, b) {

    var arr1 = (a.length > b.length) ? a : b;
    var arr2 = (a.length < b.length) ? a : b;

    if (a.length === b.length) {
        arr1 = a;
        arr2 = b;
    }
    var mem = 0;
    var sum = 0;
    var result = "";
    var count = 1;

    for (var i = arr1.length -1; i >= 0; i--) {
        let val1 = parseInt(arr1[i]);
        if (arr2.length + 1 !== count) {
            let val2 = parseInt(arr2[arr2.length - count])
            sum = val1 + val2 + mem;
            count++;

            if (sum > 9 ) {
                sum = sum.toString().split("").map(function (t) { return parseInt(t) })
                mem = sum[0];
                result += sum[1].toString();
                sum = 0;
            }
            else {
                result += sum.toString();
                mem = 0;
                sum = 0;
            }
        }
        else {
            sum = parseInt(arr1[i]) + mem;
            if (sum > 9) {
                let orderSum = sum.toString().split("").reverse().join("");
                result += orderSum;
            }
            else {
                result += sum.toString();
            }
            mem = 0;
            sum = 0;
        }
    }
    if (mem !== 0) {
        result += mem;
    }
    var sortResult = result.split("").reverse().join("");
    if (sortResult.charAt(0) == "0") {
        sortResult = sortResult.substring(1);
    }
    return sortResult;
}
//'71257  7413488402631964821329'

//sumStrings('800', '9567') - Expected: '10367', instead got: '01367'
//sumStrings('99', '1') - Expected: '100', instead got: '010'
//sumStrings('00103', '08567') - Expected: '8670', instead got: '08670'
//sumStrings('50095301248058391139327916261', '81055900096023504197206408605') - Expected: '131151201344081895336534324866', instead got: '31151201344081895336534324866'