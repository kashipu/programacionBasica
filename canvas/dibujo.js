var d = document.getElementById("dibujito"); 
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

//Empiezo a dibujar

//Propiedades del Trazo
/* lienzo.beginPath(); //Inicio el trazo
lienzo.strokeStyle = "blue"; // Color del trazo
lienzo.moveTo(50,10); // Punto Inicial 
lienzo.lineTo(300,300); // Punto Final
lienzo.stroke(); // Trazo la linea
lienzo.closePath(); // Cierro la linea */

// Fuciones

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //Inicio el trazo
    lienzo.strokeStyle = color; // Color del trazo
    lienzo.moveTo(xincial,yinicial); // Punto Inicial 
    lienzo.lineTo(xfinal,yfinal); // Punto Final
    lienzo.stroke(); // Trazo la linea
    lienzo.closePath(); // Cierro la linea
};


// Ciclo While 
/* while (l < lineas) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    console.log ("Linea " + l);
    l++;
}; */

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    console.log ("Linea " + l);
}

dibujarLinea("red", 0,0,0,300)
dibujarLinea("red", 300,300,0,300)