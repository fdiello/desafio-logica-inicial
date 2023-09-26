let ranking = partidas(106,5)
let niveisDeXp = ["Ferro", "Bronze", "Prata", "Ouro","Diamante", "Lendário", "Imortal"]
let respostaFinal = "O herói tem o saldo de " + ranking + " vitórias e está no nível " 


function partidas(vitórias,derrotas){
    let saldoVitórias = vitórias - derrotas
    return saldoVitórias
}

if (ranking <=10) {
    console.log(respostaFinal + niveisDeXp[0])
}
else if(ranking>10 && ranking<=20){
    console.log(respostaFinal+ niveisDeXp[1])
}
else if(ranking>20 && ranking<=50){
    console.log(respostaFinal+ niveisDeXp[2])
}
else if(ranking>50 && ranking<=80){
    console.log(respostaFinal+ niveisDeXp[3])
}
else if(ranking>80 && ranking<=90){
    console.log(respostaFinal+ niveisDeXp[4])
}
else if(ranking>90 && ranking<=100){
    console.log(respostaFinal+ niveisDeXp[5])
}
else if(ranking>100){
    console.log(respostaFinal+ niveisDeXp[6])
}
