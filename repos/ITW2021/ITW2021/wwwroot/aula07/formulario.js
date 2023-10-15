function validate() {


    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
    var _nome = document.getElementById("Nome");
    var _nomeError = document.getElementById("NomeError");
    if (_nome.value.trim().length < 3) {
        retVal = false;
        _nomeError.classList.add("d-block");
        _nomeError.classList.remove("d-none");
    }
    else {
        _nomeError.classList.remove("d-block");
        _nomeError.classList.add("d-none");
    }




    var _morada = document.getElementById("Morada");
    var _moradaError = document.getElementById("MoradaError");
    var palavrasArray = _morada.value.split(' '); /* Partir a Morada em palavras */
    if (palavrasArray.length < 3) { /* Contar o número de palavras */
        retVal = false;
        _moradaError.classList.add("d-block");
        _moradaError.classList.remove("d-none");
    }
    else {
        _moradaError.classList.remove("d-block");
        _moradaError.classList.add("d-none");
    }




    var _cursoSelecionado = document.getElementById("Curso").selectedIndex;
    /* Se o indice é zero, não está nenhum curso selecionado */
    var _cursoError = document.getElementById("CursoError");
    if (_cursoSelecionado == 0) {
        retVal = false;
        _cursoError.classList.add("d-block");
        _cursoError.classList.remove("d-none");
    }
    else {
        _cursoError.classList.remove("d-block");
        _cursoError.classList.add("d-none");
    }



    /* Recolher todos os inputs */
    var inputElemsArray = document.getElementsByTagName("input");
    var _vehicleError = document.getElementById("VehicleError");
    var count = 0;
    for (var i = 0; i < inputElemsArray.length; i++) {
        /* Contar quais os que são do tipo checkbox e estão selecionados */
        if (inputElemsArray[i].type == "checkbox" && inputElemsArray[i].checked == true) {
            count++;
        }
    }
    if (count < 2) {
        retVal = false;
        _vehicleError.classList.add("d-block");
        _vehicleError.classList.remove("d-none");
    }
    else {
        _vehicleError.classList.remove("d-block");
        _vehicleError.classList.add("d-none");
    }



    /* Recolher todos os input[type="radio"] que estejam checked */
    var _cores = document.querySelectorAll('input[name="cor"]:checked').length;
    var _corError = document.getElementById("CorError");
    if (_cores == 0) {
        retVal = false;
        _corError.classList.add("d-block");
        _corError.classList.remove("d-none");
    }
    else {
        _corError.classList.remove("d-block");
        _corError.classList.add("d-none");
    }


    return retVal;
}