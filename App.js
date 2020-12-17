var txtInput = document.querySelector("#textarea");
var btnAlert = document.querySelector("#done");

var newtxtInput = document.querySelector("#tx3");
var btnPrompt = document.querySelector("#d3")

btnPrompt.addEventListener("click", doSomething);
function doSomething(){
     var textdata=newtxtInput.value;
     prompt(textdata);
}

btnAlert.addEventListener("click",showAlert);

function showAlert(){
     var txtdata=txtInput.value;
     alert(txtdata);
}





