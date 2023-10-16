// Exemplo de Erro, caso queira testar é preciso remover os comentários
// Dica: "Selecione o Código Comentado e precione Ctrl+(;)"

// let y: number = 10;
// y = "teste"
// console.log(y);

// No momento que é atribuido o valor do tipo String na variável "y" é voltado um erro
// Então sabendo disso é necessário ser adicionado um valor condizente com a tipagem
// No JS esse erro não se apresenta e sim o valor "10" será sobre escrito

// Exemplo Código Correto Utilizando Annotaicon
// inferencia x annotacion
// Annotacion
// let x = 10; "Declarando Variável em JavaScript"
// let x: number = 10; "Declarando Variável com tipagem"
// "Variável com Tipagem vem do (TypeScript)"
// "Tipagem == [string, boolean, number...]"

let x: number = 10;

// Mostrar Valor de "X" no terminal de compilção do (JS)
// Utilizando o VScode e a instalação correta do TypeScript
// Ao passar o mouse em cima da vaiável (x) é mostrado os valores da Variável

console.log(x);

// inferencia x annotacion
// inferencia

let w = 10;

// basicamente efetuando por inferencia a variavel já irá se comportar como fosse feita uma tipagem em cima dela
// Exemplo: caso queira testar é preciso remover os comentários

// let z = 20;
// z = "teste"

// A variável "y" será retornada com um erro, pois como ela foi declarada com o valor "20" na pratica ela é do tipo "number"
// Então dessa maneira não é preciso declarar o tipo da variavel, já que, ela assume uma tipagem a partir do valor dado a ela
// (let w: number = 10;) é a mesma coisa de (let w = 10;) a primeira sendo a INFERENCIA e a segunda a ANNOTACION

// Tipos basicos no TypeScript

let firstName: string = "Nome";
let age: number = 18;
const isAdmin: boolean = true;

// No TypeScript é sempre utilizados os tipos escritos em minusculo
// Para verificar o tipo de uma variavel é possível com:
// console.log(typeof firstName);

//----------------------------------------------------------------------------------

// Objeto no TypeScript
// Crinando um Objeto com array
const myNumbers: number[] = [1, 2, 3]

// Adicionando um novo elemento ao Array myNumber
myNumbers.push(5);

// Mostrando os valores do array
console.log(myNumbers);

// Mostrando a quantidade de elementos dentro do array
console.log(myNumbers.length);

// Objeto em string
// Deixando as letras maiusculas
// com apenas um metodo conseguimos deixar as letras em maiusculo

console.log(firstName.toUpperCase());

// Lembrando que cada Metodo só irá funcionar com o tipo referente aquele metodo
// Exemplo: Uma variavel string não vai funcionar o metodo "lenght"
// Exemplo: Uma variavel number não vai funcionar o metodo "toUpperCase"

//----------------------------------------------------------------------------------

// Tuplas no TypeScript -> TUPLE
// Criada a variavel e dito que será inserido três tipos
// Importante adicionar o valor referente ao tipo na mesma ordem declarada aqui
let myTuple: [number, string, string[]]

// Adicioando o valor a Tupla com 3 variaveis
// Declarado (5 = number) (teste = string) ([a, b] = string)
myTuple = [5, "teste", ["a","b"]]

// Exemplo de Erro, caso queira testar é preciso remover os comentários
// myTuple = [true, false, true]

//----------------------------------------------------------------------------------

// Object Literals
// Object Literals -> {prop: value}
// Criando um objeto com valores, dentro dele
// Basicamente eu tenho um objeto com duas variaveis dentro dele

const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
}

// mostrar todo o valor
console.log(user);

// mostrar o valor filtrado somente por "name"
console.log(user.name);

// mostrar o valor filtrado somente por "age"
console.log(user.age);

//----------------------------------------------------------------------------------

// Tipagem ANY
// Não aconselhada ser utilizada, pois vai contra a filosofia do TypeScript
// Possibilita adicionar valores de varias tipagem na variavel
let a: any = 0;

a = "teste";
a = true;
a = [];

// Solução para o Any
// union type
// utilizado quando não se sabe quantos valores a variavel pode ter

let id: string | number = "teste" // Declarado como string

id = 200 // Declarado como number

// Lembrando que caso não for informado no union o tipo o erro será apresentado
// id = true;
// id = [];

//----------------------------------------------------------------------------------

// Type Alias
// Criando um novo tipo para variavel
// Exemplo:

type myIdType = number | string

const userId: myIdType = 10;

//----------------------------------------------------------------------------------

// enum
// enumera uma coleção
// Exemplo tamanho de roupas
// Cria um tipo de objeto, sendo 1 ou varios objetos
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

// Criando o objeto camisa
const camisa = {
    name: "Camisa gola V",
    size: Size.G // Na variavel "size" foi chamado o objeto Size com o valor "G"
}

console.log(camisa);

//----------------------------------------------------------------------------------

// Literal Types
// Tipo literal para a variavel
// Aquela variavel só terá o valor informado

let login: "autenticado" | null

// Não será possivel alterar o valor por conta dele somente aceitar um valor
login = "autenticado";
login = null;

 // Exemplo de usuario logado, se "login" for igual a "autenticado" usuario logado
 // Se "Login" for igual a null usuario não logado

//----------------------------------------------------------------------------------

// Funções
// Exemplo de função soma com tipagem number

function sum(a: number, b: number){
    return a + b;
}

console.log(sum(12, 12)); // Valor será somado

// Exemplo de função com tipagem string

function sayHelloTo(name: string): string{
    return `Hello ${name}`
}

console.log(sayHelloTo("Matheus")); // Matheus será adicionado a função

// Exemplo de função sem tipagem

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!");
