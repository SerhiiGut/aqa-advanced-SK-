let output = "";

for (let i = 1; i <= 9; i++ ) {
    for (let j = 1 ; j<=9 ; j++) {
        output += " " +i * j;
        if (i * j < 10 ) {
            output+= "";
        }
    }
    output += "\n"
}

console.log(output)
output = ""