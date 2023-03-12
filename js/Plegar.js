let Div_Negro = document.getElementsByName("DivNegro")[0];
let Aside = document.getElementsByName("Aside")[0];
let Boton_PlegarIzq = document.getElementsByName("BotonPlegarizq")[0];
let Boton_PlegarDer = document.getElementsByName("BotonPlegarder")[0];
let Cubo = document.getElementsByName("Contenedor_Container_Cubo")[0];
let Container_Flechas = document.getElementsByName("Div_Flechas")[0];

function AgregarFade(){
    Div_Negro.setAttribute("id","Efecto_FadeIzq");
    Aside.setAttribute("id","Efecto_FadeIzq");
    Boton_PlegarIzq.setAttribute("id","Efecto_Fade_BotonIzq");
    Boton_PlegarDer.setAttribute("id","Opacity1");
    Cubo.setAttribute("id","Efecto_Mover_CuboIzq");
    Container_Flechas.classList.remove("z-0");
    Container_Flechas.classList.add("z-10");
    Container_Flechas.setAttribute("id","Efecto_FadeDer");

    setTimeout(()=>{
        Aside.classList.remove("z-10");
        Aside.classList.add("z-[-1]");

        Boton_PlegarIzq.classList.remove("z-10");
        Boton_PlegarIzq.classList.add("z-[-1]");

        Boton_PlegarDer.classList.remove("z-[-1]");
        Boton_PlegarDer.classList.add("z-10");
    },1000);
}

function QuitarFade(){
    Div_Negro.setAttribute("id","Efecto_FadeDer");
    Aside.classList.remove("z-[-1]");
    Aside.classList.add("z-10");
    Aside.setAttribute("id","Efecto_FadeDer");
    Boton_PlegarDer.setAttribute("id","Efecto_Fade_BotonDer");
    Boton_PlegarIzq.setAttribute("id","Opacity1");
    Cubo.setAttribute("id","Efecto_Mover_CuboDer");
    Container_Flechas.classList.remove("z-10");
    Container_Flechas.classList.add("z-0");
    Container_Flechas.setAttribute("id","Efecto_FadeIzq");

    setTimeout(()=>{
        Boton_PlegarIzq.classList.remove("z-[-1]");
        Boton_PlegarIzq.classList.add("z-20");

        Boton_PlegarDer.classList.remove("z-10");
        Boton_PlegarDer.classList.add("z-[-1]");
    },1000);
}

Boton_PlegarIzq.addEventListener("click", AgregarFade);
Boton_PlegarDer.addEventListener("click", QuitarFade);