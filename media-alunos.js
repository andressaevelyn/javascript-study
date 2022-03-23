const nota1= 5;
const nota2=3;
const nota3= 5;

const media= (nota1+nota2+nota3)/3;

if (media>=6) {
    console.log ("Aprovado com a media: "+ media.toFixed(2
        ));
} else if (media>=5 && media<6) {
    console.log ("Recuperação com a media " + media.toFixed(2 ));
} else {
    console.log ("Reprovado com a media "+ media.toFixed(2));

}


