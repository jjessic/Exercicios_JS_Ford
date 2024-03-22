// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

const habitantes = 214386968
const criancas = 2635854
const obitos = 262893
const taxaN = criancas * 1000 / habitantes
const taxaM = obitos * 1000 / habitantes

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

const tipoNM = Number(
    prompt(`
        O que deseja saber? Escolha uma opção:
        [1] - Taxa de natalidade
        [2] - Taxa de mortalidade
    `));


    switch (tipoNM) {
        case 1 :
        alert(`A taxa de natalidade do Brasil em 2023 é de: ${taxaN.toFixed(2)}`);
            break;

        case 2 :
        alert(`A taxa de mortalidade do Brasil em 2023 é de: ${taxaM.toFixed(2)}`);
            break;
    }

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade


