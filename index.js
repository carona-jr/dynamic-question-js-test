var areaQuiz = document.querySelector('#area-quiz');
var btnProximo = document.querySelector('#btn-proximo');
var btnVerificar = document.querySelector('#btn-verificar');
var btn = document.querySelector('#btn');
var date = document.querySelector('#date');
var numQuiz = 0, totalResultado = 0, idade = 2100;

var quiz = [
    {
        pergunta: 'Qual é o ano da promulgação da Constituição Federal do Brasil?',
        a: '1987',
        b: '1988',
        c: '1989',
        d: '1990',
        resposta: '1988'
    },
    {
        pergunta: 'Quando o Brasil foi descoberto / achado?',
        a: '1500',
        b: '1490',
        c: '1510',
        d: '1501',
        resposta: '1500'
    },
    {
        pergunta: 'Quem foi o pai da aviação no Brasil?',
        a: 'Saint Domont',
        b: 'Santos Domingues',
        c: 'Santos Dumont',
        d: 'Santo Dumon',
        resposta: 'Santos Dumont'
    },
];

function criaTituloPergunta(indiceArr) {
    var tituloPergunta = document.createElement('h2');
    var textoPergunta = document.createTextNode(quiz[indiceArr].pergunta);
    tituloPergunta.appendChild(textoPergunta);
    areaQuiz.appendChild(tituloPergunta);
};

function criaResultado() {
    var textoResultado = document.createElement('h2');
    var texto = document.createTextNode('Parabéns, você acertou ' + totalResultado + ' respostas das perguntas!!!');
    textoResultado.appendChild(texto);
    areaQuiz.appendChild(textoResultado);
};

function criaAlternativa(indiceArr, e) {
    var label = document.createElement('label');

    var inputQuiz = document.createElement('input');
    inputQuiz.setAttribute('type', 'radio');
    inputQuiz.setAttribute('name', 'quiz');

    switch (e) {
        case 'a':
            inputQuiz.setAttribute('value', quiz[indiceArr].a);
            var texto = document.createTextNode(quiz[indiceArr].a);
            break;
        case 'b':
            inputQuiz.setAttribute('value', quiz[indiceArr].b);
            var texto = document.createTextNode(quiz[indiceArr].b);
            break;
        case 'c':
            inputQuiz.setAttribute('value', quiz[indiceArr].c);
            var texto = document.createTextNode(quiz[indiceArr].c);
            break;
        case 'd':
            inputQuiz.setAttribute('value', quiz[indiceArr].d);
            var texto = document.createTextNode(quiz[indiceArr].d);
            break;
    }

    label.appendChild(inputQuiz);
    label.appendChild(texto);
    areaQuiz.appendChild(label);
};

btnProximo.onclick = function () {
    if (idade == 2100) {
        var data = date.value;
        var ano = [];
        for (var i = 0; i < 4; i++) {
            ano[i] = data[i];
        }
        idade = ano.join('');
    }
    if (idade <= 2009 && numQuiz >= 0) {
        if (numQuiz < quiz.length) {
            areaQuiz.innerHTML = '';
            criaTituloPergunta(numQuiz);
            criaAlternativa(numQuiz, 'a');
            criaAlternativa(numQuiz, 'b');
            criaAlternativa(numQuiz, 'c');
            criaAlternativa(numQuiz, 'd');
            numQuiz++;
        }
        else {
            areaQuiz.innerHTML = '';
            btn.innerHTML = '';
            criaResultado();
        }
    } else{
        alert('Idade errada');
    }
};

btnVerificar.onclick = function () {
    var quizAtual = numQuiz - 1;
    if (verificaAlternativa() === quiz[quizAtual].resposta) {
        if (quizAtual === totalResultado)
            totalResultado++;
    }
};

function verificaAlternativa() {
    var quizAtual = numQuiz - 1;
    var radio = document.getElementsByName('quiz');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
    alert('Selecione uma resposta primeiro');
};