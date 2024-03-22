// Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

const Litros = 35;
const escolha = "álcool";
const gasV = 5.30;
const alcV = 4.90;
const conta1 = gasV * Litros - 3 / 100 * Litros;
const conta2 = gasV * Litros - 5 / 100 * Litros;
const conta3 = alcV * Litros - 4 / 100 * Litros;
const conta4 = alcV * Litros - 6 / 100 * Litros;

//processamento de dados
// = switch case para gasolina ou alcool

if (Litros < 20 && escolha === "gasolina") {
    console.log(`Você escolheu ${Litros}L de ${escolha}. Com um desconto de 3% por litro, o preço final será de: R$${conta1.toFixed(2)}`);
}
else if (Litros > 20 && escolha === "gasolina") {
    console.log(`Você escolheu ${Litros}L de ${escolha}. Com um desconto de 5% por litro, o preço final será de: R$${conta2.toFixed(2)}`);
}
else if (Litros < 20 && escolha === "álcool") {
    console.log(`Você escolheu ${Litros}L de ${escolha}. Com um desconto de 4% por litro, o preço final será de: R$${conta3.toFixed(2)}`);
}
else {
    console.log(`Você escolheu ${Litros}L de ${escolha}. Com um desconto de 6% por litro, o preço final será de: R$${conta4.toFixed(2)}`);
}

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina

