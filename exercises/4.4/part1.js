let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim"
  }; 

//   console.log("Bem-vinda, " + info.personagem);

  info.recorrente = "Sim";

//   for (let key in info) {
//       console.log(key);
//   }
  
//   for (let key in info) {
//       console.log(info[key]);
//   }

console.log(info.personagem + " e " + infoTioPatinhas.personagem);
console.log(info.origem + " e " + infoTioPatinhas.origem);
console.log(info.nota + " e " + infoTioPatinhas.nota);

if (info.recorrente === "Sim" && info.recorrente === infoTioPatinhas.recorrente) {
    console.log("Ambos recorrentes");
}
else {
    console.log(info.recorrente + " e " + infoTioPatinhas.recorrente);
}