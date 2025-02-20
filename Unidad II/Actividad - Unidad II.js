// Pedir datos al usuario
var mes = parseInt(prompt("Ingrese el mes:"));
var dia = parseInt(prompt("Ingrese el día de su nacimiento:"));

// Validar el rango de entrada
if (mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31){
    var signo = obtenerSignoZodiacal(mes, dia);
    alert("Su signo zodiacale es: " + signo)
} else {
    alert("Fecha inválida, por favor ingrese datos correctos.");
}

function obtenerSignoZodiacal(mes, dia) {
    var signo = "";

    switch (mes) {
        case 1: // Enero
            signo = (dia <= 20) ? "Capricornio" : "Acuario";
            break;
        case 2: // Febrero
            signo = (dia <= 19) ? "Acuario" : "Piscis";
            break;
        case 3: // Marzo
            signo = (dia <= 20) ? "Piscis" : "Aries";
            break;
        case 4: // Abril
            signo = (dia <= 20) ? "Aries" : "Tauro";
            break;
        case 5: // Mayo
            signo = (dia <= 20) ? "Tauro" : "Géminis";
            break;
        case 6: // Junio
            signo = (dia <= 20) ? "Géminis" : "Cáncer";
            break;
        case 7: // Julio
            signo = (dia <= 22) ? "Cáncer" : "Leo";
            break;
        case 8: // Agosto
            signo = (dia <= 23) ? "Leo" : "Virgo";
            break;
        case 9: // Septiembre
            signo = (dia <= 22) ? "Virgo" : "Libra";
            break;
        case 10: // Octubre
            signo = (dia <= 22) ? "Libra" : "Escorpio";
            break;
        case 11: // Noviembre
            signo = (dia <= 22) ? "Escorpio" : "Sagitario";
            break;
        case 12: // Diciembre
            signo = (dia <= 21) ? "Sagitario" : "Capricornio";
            break;
        default:
            signo = "Fecha inválida";
    }

    return signo;
}