/*function bigCaul(){
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}


function clean(limpar){

    document.getElementById('resultado').innerHTML = "";

}

function corrigir(){

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

function caulcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}*/

function calculadora(){

    var minhaJanela = window.open("calculadora.html");

}


function calcularProbabilidade() {
    var frequenciaConhecimento = prompt("Com que frequência você conhece pessoas novas? (em uma escala de 1 a 10)");
    var participaAtividadesSociais = prompt("Você participa de atividades sociais ou grupos onde pode conhecer pessoas com interesses semelhantes? (sim/não)");
    var nivelConfianca = prompt("Qual é o seu nível de confiança para iniciar conversas e se relacionar com novas pessoas? (em uma escala de 1 a 10)");
    var usaAppsRelacionamento = prompt("Você utiliza aplicativos de relacionamento? (sim/não)");
    var temCirculoSocial = prompt("Você tem algum círculo social estabelecido onde pode ser introduzido a possíveis parceiras? (sim/não)");
  
    var chances = 0.5; // Chance base
  
    // Ajuste das chances baseado nas respostas
    if (frequenciaConhecimento >= 5) {
      chances += 0.1;
    }
  
    if (participaAtividadesSociais.toLowerCase() === "sim") {
      chances += 0.2;
    }
  
    chances += nivelConfianca / 10 * 0.1;
  
    if (usaAppsRelacionamento.toLowerCase() === "sim") {
      chances += 0.1;
    }
  
    if (temCirculoSocial.toLowerCase() === "sim") {
      chances += 0.1;
    }
  
    //return chances;
    
    var probabilidade = chances;
    alert(`A probabilidade de encontrar uma namorada em um ano é de aproximadamente: ${probabilidade * 100} %`);
  }

        function reajuste(){
            var salario=Number(prompt("Valor do salário"));
            var reajuste=Number(prompt("Valor do reajuste"));
            var tt=salario+reajuste;
            porc=parseInt(reajuste*100/tt+salario);
            alert(`Valor com reajuste: ${porc}`); 
    

        }
        function datadenasc(){
            var ano = prompt("Qual é a aua idade? ");
            var ano2 = prompt("Que ano nós estamos? ");
            ano = parseInt(ano);
            ano2 = parseInt(ano2);
            var data = (ano2 - ano);
        
            alert(`Você nasceu em ${data}`);
        
        }
        function cem(){
            var num = Number(prompt("Escreva um número"));
        
            if(num>=100){
                alert(num+" é maior ou igual 100");
        
            }else{
                alert('este número é menor que 100');
            }
        }
        
        
        function areadoretangulo1(){
            var h = Number(prompt("Altura do retângulo"));
            var b = Number(prompt("Base do retângulo"));
            var a = b * h;
        
            alert("Há área do retângulo é: "+a);
        }
        
        function arraY(){
        var numeros = new Array ();
        var Qtd =  parseInt (prompt("Defina a quantidades de números a serem digitados: "));
        for(i = 0; i <= Qtd-1; i++){
            numeros[i] = parseInt (prompt(`Digite o ${i+1}º número inteiro : `, ""));
        }
        for(i= 0; i<=Qtd-1; i++){
            alert(`Os numeros digitados foram  ${numeros[i]}`);           
        }

        //O código a baixo foi substituido pelo código a cima

       // numeros[0] = parseInt (prompt("Digite um número inteiro : ", ""))
        //numeros[1] = parseInt (prompt("Digite o segundo número inteiro : ", ""))
        //numeros[2] = parseInt (prompt("Digite o terceiro número inteiro : ", ""))
        //numeros[3] = parseInt (prompt("Digite o quarto número inteiro : ", ""))
        //numeros[4] = parseInt (prompt("Digite o quinto número inteiro : ", ""))

        //alert(`Os numeros digitados foram  ${numeros[0]}`);
        //alert(`Os numeros digitados foram  ${numeros[1]}`)
        //alert(`Os numeros digitados foram  ${numeros[2]}`)
        //alert(`Os numeros digitados foram  ${numeros[3]}`)
        //alert(`Os numeros digitados foram  ${numeros[4]}`)
        }
// a entrada do usuário não é armazenada.

    function trianguloretangulo(){
        var h = Number(prompt("Autura do Triângulo retângulo: "));
        var b = Number(prompt("Base do Triângulo retângulo: "));
        var a = b * h;

        alert("Há área do retângulo é: "+a);
    }
    
    function salario(){
        var valorHora = Number(prompt("Digite o valor da sua hora: "))
        var quantidadesHoras = Numbrer(prompt("Quantas hora você trabalha? "))
        var salario = valorHora * quantidadesHoras;
        alert(`O valor do seu sálario deve ser de ${salario}R$`)

    }

    function idade(){
        var nasc = Number(prompt("Em que ano você nasceu? "));
        var anoAtual = 2022;
        var idade = anoAtual - nasc;
        alert(`Você tem: ${idade} anos.`)
    }

    function media(){
        var totalNotas= (prompt("Digite a quantidade de notas: "));
        var soma = 0;
        var i = 1;
        while(i <= totalNotas){
            var nota = Number(prompt("Digite uma nota: "))
            var soma = soma + nota;
            var i = i +1;
    }
    var media = soma/totalNotas;
    alert(`A média de notas é: ${media}`);
    }

    function dobro(){
        let num=prompt("Escreva um Número: ")
        let dobro = num*2;
        alert("Dobro do número é: " + dobro)
    }
    function DiasViajado() {
    let viagem = Number(prompt("Escreva quantas horas você viajou: "));
    let diasViajados = (viagem/24);
    alert(`Você viajou: ${diasViajados.toFixed(2)} dias`);
    }


    function parimpar() {
    let num = Number(prompt("Digite um número: "));

    if(num % 2 == 0){
        alert ('Esse número é par');
    } else {
        alert ('Esese número e impar');
    }
    }

    function horasvividas(){
    let vida=Number(prompt("Sua idade: "))
    let horas=vida*8760
    alert(`Você viveu ${horas} horas`)
    }
    /*Exercício: Perguntar ao usuário PESO E ALTURA para
    calcular o IMC. Após calcular o IMC, validar se está
    dentro da seguinte classificação:
    IMC    Categoria
    < 20,7  Abaixo do peso
    20,7 a 26,4 Peso ideal
    26,5 a 27,8 Pouco acima do peso
    27,9 a 31,1 Acima do peso
    31,2 e acima Obesidade
    imc = peso/(altura**2)*/
    function calcular(){
    let peso = Number(prompt("Digite seu peso: "));
    let altura = Number(prompt("Digite sua altura: "));
    imc = peso/(altura**2); 
    if(imc < 20.7){
        alert("Abaixo do peso " + imc.toFixed(1));
    }else if(imc >= 20.7 && imc <= 26.4){
        alert("Peso ideal " + imc.toFixed(1));
    }else if(imc > 26.4 && imc <=27.8){
        alert("Pouco acima do peso " + imc.toFixed(1));
    }else if(imc > 27.8 && imc <= 31.1){
        alert("Acima do peso " + imc.toFixed(1));
    }else{
        alert("Obeso");
    }
}

    function operar(){
    var tabf = parseInt(prompt("Qual tabuada você quer? "));
    var lim = parseInt(prompt("Até que número? "));
    var opr = prompt("Que operação deseja realizar? (multipllicação, divisão, soma ou subtração.) ");
    switch(opr.toLowerCase()) {
        case "multiplicação":
        for(i=0; i<= lim; i++){
            var resultado = tabf * i;
        alert (`${tabf} x ${i} = ${resultado}`);
        }
        break
      /*  case "Multiplicação":
            for(i=0; i<= lim; i++){
                var resultado = tabf * i;
            alert (`${tabf} x ${i} = ${resultado}`);
            }
            break
            */
        case "divisão":
        for(i=1; i<= lim; i++){
            var resultado = (tabf / i);
            var resultadoArr = parseFloat(resultado.toFixed(2));
        alert (`${tabf} / ${i} = ${resultadoArr}`);
        }
        break
       /* case "Divisão":
        for(i=1; i<= lim; i++){
            var resultado = (tabf / i);
            var resultadoArr = parseFloat(resultado.toFixed(2));
        alert (`${tabf} / ${i} = ${resultadoArr}`);
        }
        break*/
        case "soma":
        for(i=0; i<= lim; i++){
            var resultado = tabf + i;
        alert (`${tabf} + ${i} = ${resultado}`);
        }
        break
        case "subtração":
        for(i=0; i<= lim; i++){
            var resultado = tabf - i;
        alert (`${tabf} - ${i} = ${resultado}`);
        }
        break

        default:
        alert ("Operação inválida. Verifique se a operação desejada foi digitada corretamente!!!")
    }
    
}
