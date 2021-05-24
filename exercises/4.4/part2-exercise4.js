let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function countCharacters() {
    let charactersInEach = [];
    
    for (let key in names) {
        let splitName = names[key].split("");
        let characterCount = splitName.length;
    }
    return names;
}
console.log(countCharacters());
// function findLongestName() {
//     let longestName = countCharacters()[0];
    
//     for (let index = 0; index > names.length; index += 1) {
//         if 
//     }
// }