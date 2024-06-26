// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else

//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto

const produto = "pano de prato";
const quantidade = parseFloat(prompt("Informe a quantidade de unidade(s) do produto:"));
const valorCompras = parseFloat(prompt("Informe o valor da unidade do produto:"));
const valor = valorCompras * quantidade;
const desconto1 = valor - 2 / 100 * valor;
const desconto2 = valor - 3 / 100 * valor;
const desconto3 = valor - 5 / 100 * valor;

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realizar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

if (quantidade <= 5) {
    alert(`Você recebeu um desconto de 2%. O valor total de ${quantidade} unidade(s) de ${produto} é de: R$${desconto1.toFixed(2)}.`)
}
else if (quantidade <= 10) {
    alert(`Você recebeu um desconto de 3%. O valor total de ${quantidade} unidade(s) de ${produto} é de: R$${desconto2.toFixed(2)}.`)
}
else {
    alert(`Você recebeu um desconto de 5%. O valor total de ${quantidade} unidade(s) de ${produto} é de: R$${desconto3.toFixed(2)}.`)
}

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto