// Escreva     um     programa que leia     as     medidas     dos     lados     de     
//um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 

// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo
const lado1 = 90
const lado2 = 10
const lado3 = 40

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 
if (lado1 == lado2 && lado2 == lado3) {
    console.log(`Por possuir três lados iguais, o triângulo é: Equilátero.`);
}
else if (lado1 == lado2 || lado2 == lado3 || lado1 && lado3) {
    console.log(`Por possuir dois lados iguais, o triângulo é: Isóscele.`);
// simplificação lógica!
// } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
// console.log('Isósceles');
} else {
    console.log(`Por possuir três lados diferentes, o triângulo é: Escaleno.`);
}



//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console