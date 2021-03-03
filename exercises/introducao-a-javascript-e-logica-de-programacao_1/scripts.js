/* EXERCICIO 1
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição
Subtração
Multiplicação
Divisão
Módulo*/
let a = 10;
let b = 2;

/* adição */
let adicao = a + b;
    console.log(adicao);


/* subtração */
let subtracao = a - b;
    console.log(subtracao);

/* multiplicação */
let multiplicacao = a * b;
    console.log(multiplicacao);

/* divisao */
let divisao = a / b;
    console.log(divisao);

/* EXERCICIO 2
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. */
let a = 10;
let b = 2;

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}


/* EXERCICIO 3
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */
let a = 100; b = 2; c = 20;

if (a > (b && c)) {
    console.log(a);
}

else if (b > (a && c)) {
    console.log(b);
}

else if (c > (b && a)) {
    console.log(c);
}


/* EXERCICIO 4
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo,
"negative" se for negativo e "zero" caso contrário. */
let number = 10;

if (number > 0) {
    console.log('positive');
}
else if (number < 0) {
    console.log('negative')
}
else {
    console.log('zero')
}



// EXERCICIO 5
//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angule1 = 45;
let angule2 = 30;
let angule3 = 15;

let sumAngules = angule1 + angule2 + angule3;

if (sumAngules === 180) {
    console.log(true);
}
else {
    console.log(false);
}



//EXERCICIO 6
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peçaXadrez = 'bispo';

switch (peçaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};


/* EXERCICIO 7
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let note = 47;

if (note < 0 || note > 100) {
    console.log('Erro! Nota incorreta');
}
else if (note >= 90) {
    console.log("A");
} else if (note >= 80) {
    console.log("B");
} else if (note >= 70) {
    console.log("C");
} else if (note >= 60) {
    console.log("D");
} else if (note >= 50) {
    console.log("E");
} else {
    console.log("F");
}


/* EXERCICIO 8
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par.
Caso contrário, ele retorna false .
Bonus: use somente um if . */

let n1 = 3;
let n2 = 4;
let n3 = 2;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}



/* EXERCICIO 9
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.
A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo,
sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let custoProduto = 1;
let valorVenda = 3;

//lucro = valorVenda - custoProduto.
// + 20% sobre o valor de custo.

if (custoProduto >=0 && valorVenda >=0) {
    custoTotal = custoProduto + custoProduto * 0.2;
    lucro = (valorVenda - custoTotal) * 1000;
    console.log(lucro);
}
else {
    console.log('Erro! Os valores precisam ser positivos')
}




/* EXERCICIO 11
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10.
Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.*/

let salarioBruto = 1000.00;
// calcule o liquido
let inss;
let ir;

//INSS
if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else {
    inss = 570.88;
  }

let salarioBase = salarioBruto - inss;

  //IR
  if (salarioBase <= 1903.98) {
    ir = 0;
  } else if (salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
  } else if (salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80;
  } else if (salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
  } else {
    ir = (salarioBase * 0.275) - 869.36;
  };

  console.log("Salário: " + (salarioBase - ir));