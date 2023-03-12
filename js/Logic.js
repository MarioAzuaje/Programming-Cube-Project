let Boton_Javascript = document.getElementsByName("Boton")[0];
let Boton_Python = document.getElementsByName("Boton")[1];
let Boton_Csharp = document.getElementsByName("Boton")[2];
let Boton_Typescript = document.getElementsByName("Boton")[3];
let Boton_Java = document.getElementsByName("Boton")[4];
let Boton_Go = document.getElementsByName("Boton")[5];
let Dado = document.getElementsByName("Dado")[0];

function agregarHover_Js(){
    Dado.setAttribute("id","RotacionCubo_Javascript");
}

function agregarHover_P(){
    Dado.setAttribute("id","RotacionCubo_Python");
}

function agregarHover_C(){
    Dado.setAttribute("id","RotacionCubo_Csharp");
}

function agregarHover_Ty(){
    Dado.setAttribute("id","RotacionCubo_Typescript");
}

function agregarHover_Java(){
    Dado.setAttribute("id","RotacionCubo_Java");
}

function agregarHover_Go(){
    Dado.setAttribute("id","RotacionCubo_Go");
}

Boton_Javascript.addEventListener("click", agregarHover_Js);
Boton_Python.addEventListener("click", agregarHover_P);
Boton_Csharp.addEventListener("click", agregarHover_C);
Boton_Typescript.addEventListener("click", agregarHover_Ty);
Boton_Java.addEventListener("click", agregarHover_Java);
Boton_Go.addEventListener("click", agregarHover_Go);