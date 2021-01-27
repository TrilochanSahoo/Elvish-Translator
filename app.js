var txtarea = document.querySelector(".txt-field");
var btnTranslate = document.querySelector(".btnTranslate");
var outputarea = document.querySelector(".outputfield");

var servername = "https://api.funtranslations.com/translate/quenya.json"

function urlname(name){
    return servername+"?"+"text="+name
}
function eventHandler(){
    var input=txtarea.value;
    fetch(urlname(input))
    .then(response => response.json())
    .then(json =>{
        var translatedtxt = json.contents.translated
        outputarea.innerText = translatedtxt 
    })
}
btnTranslate.addEventListener("click",eventHandler);