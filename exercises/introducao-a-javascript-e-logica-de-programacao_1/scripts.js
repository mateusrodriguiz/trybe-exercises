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
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
