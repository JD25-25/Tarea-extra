var jugar = true;
var nombre = prompt("ingrese su nombre");
var carnet = prompt("ingrese su numero de carnet");
//noprotect
while(jugar){
  var op = Math.floor(Math.random()* 9) +1;
  var usuario;
  
  do {
    usuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
  } while(usuario<3||usuario>6);
  
  var eleccion = prompt("¿Cree que su número es 'mayor', 'menor' o 'igual' al numero de la computadora?");
  
  var resultado;
  if(usuario>op){
     resultado = "mayor";
  } else if (usuario<op){
    resultado = "menor"
  } else {
    resultado = "igual";
  }
  
  var mensaje = "La computadora eligió " + op + ", usted eligió " + usuario + ". Su elección es " + resultado + ". ";
    if (eleccion == resultado) {
      mensaje += "!Ha adivinado¡";
    } else {
       mensaje += "No ha acertado.";
    } 
  alert(mensaje);
  
  var respuesta = prompt("¿Quiere jugar otra vez? (SI/NO)");
  jugar = (respuesta == "si");
}

alert("Gracias por jugar, " + nombre + ". Carnet No. " + carnet)