const ampulhetaA = parseInt(process.argv[2], 10),ampulhetaB = parseInt(process.argv[3], 10),cozimento = parseInt(process.argv[4], 10);
	
const resto = (num1, num2) => {
let remain;
do {
remain = num1 % num2;
num1 = num2;
num2 = remain;
} while (remain != 0);
return num1;
}

const calculoDesafio = (ampulhetaA, ampulhetaB, miojo) => {
if (ampulhetaA <= miojo || ampulhetaB <= miojo) {
    console.info(`O tempo do cozimento deve ser menor do que o valor das ampulhetas.`);
    process.exit(1)
}
if ((miojo % resto(ampulhetaA, ampulhetaB))) {
     console.info(`Erro ao calcular com os valores inseridos`);
     process.exit(1)
}}

calculoDesafio(ampulhetaA, ampulhetaB, cozimento);

let tempampulhetaA = ampulhetaA,
tempampulhetaB = ampulhetaB,
totalTentativas = 0,
contador = 0,
tempoTotal = 0;

const maxTentativas = 100;

if(totalTentativas >= maxTentativas){
console.info('Excedeu o maximo de tentativas')
process.exit(1)
}

while (totalTentativas < maxTentativas) {
totalTentativas = tempampulhetaA > tempampulhetaB ? tempampulhetaB : tempampulhetaA;
if (totalTentativas == cozimento) {
    tempoTotal += totalTentativas;
break;
} else {
if (tempampulhetaA > tempampulhetaB) {
    tempampulhetaA = tempampulhetaA - tempampulhetaB
    tempoTotal += tempampulhetaB;
    tempampulhetaB = ampulhetaB;
} else {
		tempampulhetaB = tempampulhetaB - tempampulhetaA
        tempoTotal += tempampulhetaA;
        tempampulhetaA = ampulhetaA;
}}
contador++;
}

/**window.alert(`Ampulheta 1:     ${ampulhetaA}`);
window.alert(`Ampulheta 2:     ${ampulhetaB}`);
window.alert(`Cozimento:    ${totalTentativas}`);
window.alert(`Tempo total de espera: ${tempoTotal}`);
window.alert(`Contador: ${contador}\n`);*/

//print no console
console.info(`Valores informados: Ampulheta 1: ${ampulhetaA}, Ampulheta 2: ${ampulhetaB} e Cozimento: ${totalTentativas}`);
console.info(`Tempo total: ${tempoTotal}`);
console.info(`Contador: ${contador}\n`);