const arrayDeString = ["Anderson", "Andressa", "Thayla", "Giovani", "Daniel", "Giovanna", "Daniela", "Joana"];
const arrayDeNumero = [1,2,3,4,5,6];
const arrayDeBoolean = [true, false, true, false, false];


console.log(arrayDeString);
console.log(arrayDeNumero);
console.log(arrayDeBoolean);

console.log(arrayDeString[3]);

//Buscando o Daniel

for(let i= 0; i <8; i++) {
    if (arrayDeString[i] === "Daniel") {
        console.log("Encontrei o Daniel na posição: "+ i);
        break;
    }
}

const matriz = [
        ["Anderson", "Andressa", "Thayla"],
        [ "Giovanne", "Daniel", "Giovanna"] 
]; 

//Buscando o Daniel na matriz 
for (let linha = 0; linha < matriz.length; linha++){
    for (let coluna = 0; coluna < matriz [linha].length; coluna++) {
       console.log("Linha: "+ linha);
       console.log( "coluna: "+ coluna);
        if (matriz [linha] [coluna].toLowerCase() === "Daniel".toLowerCase()){
            console.log ("Encontrei a Thayla na posição: " + linha + " "+ coluna);

        }
    }
}

/*
[
["Anderson", "Andressa", "Thayla"],
[ "Giovanne", "Daniela", "Giovanna"] 
]



*/