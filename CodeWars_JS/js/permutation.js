function permutations(string) {
    var result = []; 
    if (string.length < 2) { result.push(string); return result; }
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (string.indexOf(char) != i) 
            continue;    
        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
        for (var subPermutation of permutations(remainingString))
            result.push(char + subPermutation)
    }
    return result;
}

