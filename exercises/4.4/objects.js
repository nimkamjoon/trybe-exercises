let athlete = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log("A jogadora " + athlete.name + " " + athlete.lastName + " tem " + athlete.age + " anos de idade.");

athlete.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
athlete.fullName = athlete.name + " " + athlete.lastName;

console.log("A jogadora " + athlete.fullName + " foi eleita a melhor do mundo por " + athlete.bestInTheWorld.length + " vezes.");

console.log("A jogadora " + athlete.fullName + " possui " + athlete.medals.golden + " medalhas de ouro, e " + athlete.medals.silver + " medalhas de prata.");