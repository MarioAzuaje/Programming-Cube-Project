let Flecha_Ar = document.getElementsByName("Flecha_Arriba")[0];
let Flecha_Izq = document.getElementsByName("Flecha_Izquierda")[0];
let Flecha_Der = document.getElementsByName("Flecha_Derecha")[0];
let Flecha_Ab = document.getElementsByName("Flecha_Abajo")[0];
let DadoRot = document.getElementsByName("Dado")[0];

function Rotar_Ar(){
    DadoRot.setAttribute("id","Rotar_Ar");
}

function Rotar_Izq(){
    DadoRot.setAttribute("id","Rotar_Izq");
}

function Rotar_Der(){
    DadoRot.setAttribute("id","Rotar_Der");
}

function Rotar_Ab(){
    DadoRot.setAttribute("id","Rotar_Ab");
}

Flecha_Ar.addEventListener("click", Rotar_Ar);
Flecha_Izq.addEventListener("click", Rotar_Izq);
Flecha_Der.addEventListener("click", Rotar_Der);
Flecha_Ab.addEventListener("click", Rotar_Ab);