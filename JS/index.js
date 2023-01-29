const buttonTheme = document.querySelector('#barra');
let temaAtual = document.querySelector('#temaAtual');
let id = 'tema1'

const alterarTema = (e) =>{
    if(id == 'tema1'){
        temaAtual.href = 'CSS/theme2.css';
        id = 'tema2'
    }else if(id == 'tema2'){
        temaAtual.href = 'CSS/theme3.css';
        id = 'tema3'
    }else if(id == 'tema3'){
        temaAtual.href = 'CSS/theme1.css';
        id = 'tema1'
    }
}
buttonTheme.addEventListener('click', alterarTema);


const tela = document.querySelector('#screen');
const operadorUsado = document.querySelector('#sinal');
const numeros = document.querySelectorAll('[class*=tecla]');
const operadores = document.querySelectorAll('[class*=operador]');

let numeroDigitado;
let operadorDigitado;
let novoNumero = true;

const inserirNumero =(e) =>{
    if(novoNumero){
            tela.innerHTML = e.target.textContent; 
            novoNumero = false;
        }else if(e.target.textContent == '.'){
            tela.innerHTML += ',';
        }else{
            tela.innerHTML += e.target.textContent; 
    }
}
numeros.forEach((e)=> e.addEventListener('click', inserirNumero));

const calcular = () =>{
    if(!novoNumero){
        if(operadorDigitado == '+'){
            tela.innerHTML = numeroDigitado + parseFloat(tela.innerHTML);
            operadorDigitado = undefined;
            operadorUsado.innerHTML = '';
        }else if(operadorDigitado == '-'){
            tela.innerHTML = numeroDigitado - parseFloat(tela.innerHTML);
            operadorDigitado = undefined;
            operadorUsado.innerHTML = '';
        }else if(operadorDigitado == '/'){
            tela.innerHTML = numeroDigitado / parseFloat(tela.innerHTML);
            operadorDigitado = undefined;
            operadorUsado.innerHTML = '';
        }else if(operadorDigitado == 'x'){
            tela.innerHTML = numeroDigitado * parseFloat(tela.innerHTML);
            operadorDigitado = undefined;
            operadorUsado.innerHTML = '';
        }
    }
}

const inserirOperador = (e) =>{
    calcular()
    numeroDigitado = parseFloat(tela.innerHTML);
    operadorDigitado =  e.target.innerHTML;
    novoNumero = true
    operadorUsado.innerHTML = operadorDigitado;
}
operadores.forEach((e)=> e.addEventListener('click', inserirOperador));

const deletarUltimoDigito = () =>{
    console.log('teste')
    tela.textContent = tela.textContent.slice(0, -1);
}
document.getElementById('button-del').addEventListener('click', deletarUltimoDigito)

const limparTela = () =>{
    tela.textContent = ''
    numeroDigitado = 0;
    operadorDigitado = undefined;
    operadorUsado.innerHTML = ''
}
document.getElementById('button-reset').addEventListener('click', limparTela)

const resultado = () =>{

}
document.getElementById('button-igual').addEventListener('click', calcular)

