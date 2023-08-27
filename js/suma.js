function sumar(){
    //para difinir una variable se utiliza la palabra clave var o let
    //es necesario asignar un valor automaticamente
    //javascript es un lenguaje es debilmente equipado
    var num1=0;
    var num2=0;
    var result=0;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    result=num1+num2;
    alert("El resultado es: "+result);
    console.log("El resultado es: "+result);
    document.getElementById("result").value=(result);
}