var celsiusIput= document.getElementById("Celsius");
var FahrenheitIput= document.getElementById("Fahrenheit");

function convertTocelsius(){
    if(celsiusIput.value!==""){
        var Celsius= parseFloat(celsiusIput.value);
        var Fahrenheit=(Celsius*9/5)+ 32;
        FahrenheitIput.value=Fahrenheit.toFixed(2);
    }
}
function convertTofahrenheit(){
    if(FahrenheitIput!==""){
        var Fahrenheit =parseFloat(FahrenheitIput.value);
        var Celsius=(Fahrenheit-32)*5/9;
        celsiusIput.value= Celsius.toFixed(2);
    }
}