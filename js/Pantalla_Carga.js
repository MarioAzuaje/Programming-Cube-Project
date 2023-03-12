let body = document.getElementsByName("Body")[0];

window.onload = function(){
    setTimeout(()=>{
        $('#Cargando').fadeOut();
        body.setAttribute("id","");
    },1500)
}