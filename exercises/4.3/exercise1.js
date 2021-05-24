let n = 5;

let line = [];

for (let index = 0; index < n; index += 1) {
    line.push("*");
}

line = line.join("");

for (let index = 0; index < line.length; index += 1) {
    console.log (line)
}