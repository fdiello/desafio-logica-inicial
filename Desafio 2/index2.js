let ranking = partidas(30,5)
let nivelDoHeroi= nivel(ranking)
let respostaFinal = "O herói tem o saldo de " + ranking + " vitórias e está no nível " + nivelDoHeroi

console.log(respostaFinal)


function partidas(vitórias,derrotas){
    let saldoVitórias = vitórias - derrotas
    return saldoVitórias
}

function nivel(ranking){
    let niveisDeXp = ["Ferro", "Bronze", "Prata", "Ouro","Diamante", "Lendário", "Imortal"]
    
    if (ranking <=10) {
        return niveisDeXp[0]
}
    else if(ranking>10 && ranking<=20){
        return niveisDeXp[1]
}
    else if(ranking>20 && ranking<=50){
        return niveisDeXp[2]
}
    else if(ranking>50 && ranking<=80){
        return niveisDeXp[3]
}
    else if(ranking>80 && ranking<=90){
        return niveisDeXp[4]
}
    else if(ranking>90 && ranking<=100){
        return niveisDeXp[5]
}
    else if(ranking>100){
        return niveisDeXp[6]
}
}