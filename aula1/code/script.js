//AULA 5

alert("Ola Mundo"); //mostra a mensagem Ola Mundo.
confirm("Esta gostando de JS?"); //mostra um popup que mostra um texto e pede uma confirmação.
prompt("Qual é seu nome?"); //mostra um popup solicitando a incerção de um texto.

//AULA 6

var ñ1 = 0; //js aceita variaveis com acentos
typeof ñ1; //typeof diz o tipo de uma variavel ou valor.
var n1 = window.prompt("digite um numero");
var n2 = window.prompt("digite mais um numero");
var n3 = n1 + n2;
window.alert(`A concatenação dos valores é ${n3}`); //aqui o resultado é a concatenação dos numeros;

var n1 = Number.parseInt(window.prompt("digite um numero"));
var n2 = Number.parseInt(window.prompt("digite mais um numero"));
var n3 = n1 + n2;
window.alert(`A soma dos valores é ${n3}`); // aqui o resultado é a a soma dos valores;

var n1 = Number(window.prompt("digite um numero")); //o Number sozinho faz a converção para float ou inteiro dependendo do resultado;
var n2 = Number(window.prompt("digite mais um numero"));
var n3 = n1 + n2;
window.alert(`A soma dos valores é ${n3}`); // aqui o resultado é a a soma dos valores.

var n1 = String(5);
var n2 = String(7);
var n3 = n1 + n2;
alert(n3.toString()); //aqui o resultado sera 57, pois o js esta concatenando a string 5 com o numero 7, tornando tudo em strings podemos usar A função String passando um valor, ou usar .toString() em uma variavel para convertela.

//Formatação de Strings
//usamos ${variavel} dentro de crases para concatenar uma variavel sem precisar fechar e concatenar a variavel varias vezes.

var c1 = "Carro";
alert(`u comprei um novo ${c1}`) // assim sera mostrado o valor armazenado na variavel c1
alert(c1.length); //usamos o .length para retornar o numero de caracteres presentes na variavel c1 

var nome = window.prompt("Qual seu nome?");
document.write(`<h2>seu nome tem ${nome.length} caracteres</h2>`); //documento.write mostra o texto na tela. documento.writeln mostra o texto e quebra a linha.
nome = nome.toUpperCase(); // a função .toUpperCase(); deixa todo o texto maiusculo
alert(nome);
nome = nome.toLowerCase(); // a função .toLowerCase(); deixa todo o texto minusculo
alert(nome);

//Formatação de numeros
var n1 = parseFloat(3.14159265359);
// alert(n1.toFixed(3)); // .toFixed(3) Limita o numero a apenas 3 casas decimais
alert(n1.toFixed(2).replace(".", ",")); //replace substitui uma coisa por outra, neste caso, o ponto, por virgula.

n1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // toLocaleString Substitue um valor por uma string localizada no mundo, no brasil usamos o pt-BR, nesse caso o style currency(currency = dinheiro) BRL transforma o numero em um valor em Reais, caso queira em dolar basta mudar o BRL para USD e EUR para euro. Nesse caso não precisa usar o replace

//ordem de precedencia: (), **, * / %, + -
//atrubuição: =, comparação: ==, comparação estrita: ===;

var n = 2;

n = n + 2;
n += 2;

n = n - 2;
n -= 2;

n = n * 2;
n *= 2;

n = n / 2;
n /= 2;

n = n ** 2;
n **= 2;

n = n % 2;
n %= 2;


n = n + 1;
n++;
++n;

n = n - 1;
n--;
--n;

//Operador Ternario
//condição?verdadeiro:falso
var n1 = 0;
n1 == 0 ? n1++ : 0;

//Arvore DOM - Document Object Model
//A arvore DOM começa pela Raiz, e a raiz é o objeto window, que é a janela do navegado
//Dentro do objeto windows, temos outros objetos, como location, document, history
//em history temos os historicos de navegação
//em location temos temos a localização da pagina, qual a pagina anterior, etc
//dentro do document temos o objeto html, que possui outros 2 objetos dentro do mesmo, o head, e o body
//dentro de head temos meta, title
//dentro de body temos h1, div, p, a, etc

window.document.write(window.document.charset); //acidiona um texto com a informação do charset em uso
document.write(window.navigator.appName);//Mostra o navegador em uso
write(window.document.URL);//mostra a URL atual.

//Metodos de acesso aos elementos.
//para selecionar um elemento pela Tag, usamos: document.getElementByTagName("");
//Element no singular eu não posso preciso colocar colchetes.
//Elements no plural eu posso usar o colchete dizendo qual elemento eu quero.
var tag = document.getElementsByTagName("p")[0];//seleciona o primeiro paragrafo
tag.innerText = "retorna o texto presente no primeiro paragrafo";//muda o texto da tag p.
tag.style.color = blue;//muda a cor do paragrafo para azul
document.getElementsByTagName("p")[1];//seleciona o segundo paragrafo

var corpo = document.body.style.backgroundColor = "cornflowerblue";

//innerText(); pega o texto presente em uma tag sem a formatação
innerHTML();//pega o html com toda a formatação.


document.getElementsById();

//para selecionar um elemento pelo ID, usamos: document.getElementById("");
document.getElementById("id");

//para selecionar um elemento pelo name, usamos: document.getElementByName("");
//para selecionar um elemento pela classe, usamos: document.getElementByClassName("");

window.document.querySelector("div.msg");//com o querySelector(); eu posso selecionar um elemento pelo css. class = . id = #;

// Eventos são coisas que podem acontecer com a div ou outros objetos
// mouseenter: é o evento de quando o mouse é posto sobre a div
// mousemove: é disparado varias vezes enquanto o mouse se move dentro da div
// mousedown: é disparado quando eu clico e seguro o mouse na div
// mouseup: é quando eu solto o botão do mouse.
// click: é quando eu clico nessa div
// mouseout: é quando eu tiro o mouse de cima da div

// funções são blocos de codigos que serão disparados apenas quando solicitados. como quando um evento acontece ou quando chamamos uma função no codigo.
// um bloco é delimitado por {}
// primeiro precisamos nomear esse bloco como uma function
// no JS existem funções anonimas.
// para criar uma função percisamos nomear a mesma para podermos ter como chamar a mesma externamente.
// ex: function clickar(//aqui podem ir parametros){} 
// com a opção onclick no html podemos chamar uma função js passando o nome da função.

var a = window.document.getElementById("area");//criando a variavel fora das funções eu posso usar a mesma variavel para varias funções, se fosse dentro de uma function esse a só seria util dentro da mesma. 
function clicar() {
    a.style.backgroundColor = "cornflowerblue";
    a.innerText = "clicou";
}//quando clicarmos na div a função clicar é chamada e esta muda a cor de fundo da div e escreve um texto
function sair(){
    a.innerText = "Saiu";
    a.style.backgroundColor = "green";
}