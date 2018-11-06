function solution(input, markers) {
   
    for (var i = 0; i < markers.length; i++) {
        var remove;
        var indexLine = input.indexOf('\n');
        var indexMark = input.indexOf(markers[i]);

        if (indexLine > indexMark) {
            remove = input.substring(indexMark, indexLine);
        }
        else {
            remove = input.substring(indexMark);
        }
        input = input.replace(remove, "");
    }
    return input.trim();
};