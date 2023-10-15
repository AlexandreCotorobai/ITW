var start = true;
var controlo = 1;
var op1 = "";
var op2 = "";
var operacao = "";
var res = document.getElementById("res");

function addNumber() {
    var x = event.target.value;
    if (controlo == 1) {
        op1 = op1 + x;
        if (start == true) {
            res.innerText = "";
            start = false;
        }
    } else {
        op2 = op2 + x;
    }

    res.innerText += x;
    console.log("op1:", op1, "operator:", operacao, "op2:", op2, "res:", res.innerText);
}

function addOperation() {
    var x = event.target.value;

    if (operacao == "" && op1 != "") {
        operacao = x; 
        res.innerText += x
        controlo = 2;
    } else {
        erro();
    }
    console.log("op1:", op1, "operator:", operacao, "op2:", op2, "res:", res.innerText);
}

function clearResult() {
    start = true;
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "0";
}

function erro() {
    start = true;
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "Erro!";
}

function calculate() {
    var error = 0;

    var op1_valor = parseFloat(op1);
    var op2_valor = parseFloat(op2);

    if(controlo == 2 && op2 != "") {
        switch (operacao) {
            case "+":
                res.innerText = op1_valor + op2_valor;
                break;
            case "-":
                res.innerText = op1_valor - op2_valor;
                break;
            case "*":
                res.innerText = op1_valor * op2_valor;
                break;
            case "/":
                if (op2_valor == 0) {
                    erro();
                    error = 1;
                    break;
                } else {
                    res.innerText = op1_valor / op2_valor;
                    break;
                }
        }
        start = true;
        controlo = 1;
        operacao = "";
        op1 = "";
        op2 = "";
        }
    
    console.log("op1:", op1, "operator:", operacao, "op2:", op2, "res:", res.innerText);
}