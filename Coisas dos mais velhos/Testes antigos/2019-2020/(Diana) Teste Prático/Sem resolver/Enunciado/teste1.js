function validaFormulario() {
    console.log("CALL: validaFormulario()");
    retVal = true;
    //--- Validar se todos os campos estão preenchidos

    //--- Preencher o campo "relatorio"

    //--- Sair
    return retVal;
}


function limpaErros() {
    console.log("CALL: limpaErros()");
    //--- Limpar as mesagens de erro que estiverem ligadas
}


// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();     //--- Devolverá 9
// new Date("2019-11-09").getMonth();    //--- Devolverá 11
// new Date("2019-11-09").getFullYear(); //--- Devolverá 2019
// 
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked
//