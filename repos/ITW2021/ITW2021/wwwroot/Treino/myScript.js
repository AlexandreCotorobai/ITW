var operacao = "+";

function getOperacao() {
    var e = document.getElementById("operacao");
    operacao = e.options[e.selectedIndex].value;
}

function calcula() {
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var res = document.getElementById("res");

    switch (operacao) {
        case "+":
            res.value = parseFloat(op1.value) + parseFloat(op2.value);
            break;
        case "-":
            res.value = op1.value - op2.value;
            break;
        case "*":
            res.value = op1.value * op2.value;
            break;
        case ":":
            res.value = op1.value / op2.value;
            break;
        case "%":
            res.value = op1.value % op2.value;
            break;
        case "!":
            res.value = 1;
            for (i = 2; i <= op1.value; i++) {
                res.value = res.value * i;
            }
            break;
    }
}