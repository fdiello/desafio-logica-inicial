// varíaveis
let nomeHeroi = "Felipe Diello"
let niveisDeXp = ["Ferro", "Bronze", "Prata", "Ouro","Platina", "Ascendente", "Imortal","Radiante"]
let quantidadeDeXp = 15510
let respostaFinal = "O herói de nome " + nomeHeroi + " está no nível de "

if (quantidadeDeXp <=1000) {
    console.log(respostaFinal + niveisDeXp[0])
}
else if(quantidadeDeXp>1000 && quantidadeDeXp<=2000){
    console.log(respostaFinal+ niveisDeXp[1])
}
else if(quantidadeDeXp>2000 && quantidadeDeXp<=6000){
    console.log(respostaFinal+ niveisDeXp[2])
}
else if(quantidadeDeXp>6000 && quantidadeDeXp<=7000){
    console.log(respostaFinal+ niveisDeXp[3])
}
else if(quantidadeDeXp>7000 && quantidadeDeXp<=8000){
    console.log(respostaFinal+ niveisDeXp[4])
}
else if(quantidadeDeXp>8000 && quantidadeDeXp<=9000){
    console.log(respostaFinal+ niveisDeXp[5])
}
else if(quantidadeDeXp>9000 && quantidadeDeXp<=10000){
    console.log(respostaFinal+ niveisDeXp[6])
}
else if(quantidadeDeXp>10000) {
    console.log(respostaFinal+ niveisDeXp[7])
}

