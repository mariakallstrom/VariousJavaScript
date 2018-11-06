function digital_root(n) {
    // ...
    var result = 0;
    n = n.toString().split("").map(function (t) { return parseInt(t) })
    if (n.length === 1) {
        return n[0];
    }
    for (var i = 0; i < n.length; i++) {
        result = result + n[i];
    }
    return digital_root(result);
}

