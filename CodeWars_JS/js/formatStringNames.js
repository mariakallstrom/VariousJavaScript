function list(names) {
    //your code here
    var result ="";
    if (names.length === 1) {
        return names[0].name;
    }
    for (var i = 0; i < names.length; i++) {
        if (i === names.length - 2) {
            result += names[i].name + " & "
        }
        else if (i === names.length - 1) {
            result += names[i].name
        }
        else {
            result += names[i].name + ", "
        }
       
    }
    return result;
}