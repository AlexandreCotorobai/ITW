var _name = document.getElementById("field_1");
var nameError = document.getElementById("field_1_Error");
var lastname = document.getElementById("field_2");
var lastnameError = document.getElementById("field_2_Error");
var sexMale = document.getElementById("field_31").checked;
var sexFemale = document.getElementById("field_32").checked;
var sexError = document.getElementById("field_3_Error");
var date = document.getElementById("field_4");
var dateError = document.getElementById("field_4_Error");
var classes = document.getElementById("field_5");
var classesError = document.getElementById("field_5_Error");


function validaFormulario() {
    console.log("CALL: validaFormulario()");
    retVal = true;
    //--- Validar se todos os campos estão preenchidos
    if (_name.value.trim().length < 3) {
        nameError.classList.remove("hide");
        retVal = false;
    } else {
        nameError.classList.add("hide");
    }
    if (lastname.value.trim().length < 3) {
        lastnameError.classList.remove("hide");
        retVal = false;
    } else {
        lastnameError.classList.add("hide");
    }
    if (sexMale == false && sexFemale == false) {
        sexError.classList.remove("hide");
        retVal = false;
    } else if () {
        sexError.classList.add("hide");
    }

    //--- Preencher o campo "relatorio"

    //--- Sair
    console.log(retVal);
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