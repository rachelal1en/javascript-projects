function makeLine (size) {
   let line = "";
   for (let i = 0; i < size; ++i) {
    line += "#";
   }
   return line;
}

/*function makeSquare (size) {
    let square = "";
    for (let i = 0; i < size; ++i) {
        if (i == (size-1)){
            square += makeLine(size);
        }
        else {
            square += makeLine(size) + "\n";
        }
    }
    return square;
 }*/

function makeSquare (width, height) {
    let square = "";
    for (let i = 0; i < height; ++i) {
        if (i == (height-1)){
            square += makeLine(width);
        }
        else {
            square += makeLine(width) + "\n";
        }
    }
    return square;
 }

function makeDownwardStairs (height) {
    let stairs = "";
    for (let i = 0; i <= height; ++i) {
        if (i == (height)){
            stairs += makeLine(i);
        }
        else {
            stairs += makeLine(i) + "\n";
        }
    }
    return stairs;
 }

function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    let chars = "";
    let line = "";
    for (let i = 0; i < numSpaces; ++i) {
        spaces += " ";
    }
    for (let i = 0; i < numChars; ++i) {
        chars += "#";
    }
    line = spaces + chars + spaces;
    return line;
 }

 function makeIsoscelesTriangle (height) {
    let triangle = "";
    for (let i = 0; i < height; ++i) {
        if (i == (height-1)){
            triangle += makeSpaceLine(height - i - 1, 2*i + 1);
        }
        else {
            triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
        }
    }
    return triangle;
 }

 function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let diamond = "";
    diamond = makeIsoscelesTriangle(height);
    let reverseDiamond = reverse(diamond);
    diamond += "\n" + reverseDiamond;

    return diamond;
}