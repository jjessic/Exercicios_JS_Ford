// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol 
//(os gols de cada time) e informa se o resultado foi um empate, se a vitória foi 
//do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

const saopaulo = 1;
const palmeiras = 1;

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram
if (saopaulo < palmeiras) {
    console.log(`O Palmeiras venceu do São Paulo com um placar de: ${palmeiras} x ${saopaulo}`);
}
else if (saopaulo > palmeiras) {
    console.log(`O São Paulo venceu do Palmeiras com um placar de:  ${saopaulo} x ${palmeiras}`);
}
else {
    console.log(`Os dois times tiveram um empate, ficando com um placar de: ${palmeiras} x ${saopaulo}`);
}


//saida
// = informar o resultado do jogo de futebol
const placar = '3x2'
const [golstime1, golstime2] = placar.split('x');


console.log(`COR - ${golstime1} x ${golstime} - PAL`);

// não tem a ver com o futebol
const [nome, sobrenome] = 'João Roccella'.split(' ');
console.log(`Nome: ${nome} - Sobrenome: ${sobrenome}`);

