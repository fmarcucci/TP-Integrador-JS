const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

function total_a_pagar()
{
    quitarClaseError();

    if(nombre.value==="")
    {
        alert("Escribir nombre...");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }

    if(apellido.value==="")
    {
        alert("Escribir apellido...");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }

    if(mail.value==="")
    {
        alert("Escribir apellido...");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
    }

     const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if(!emailValido(mail.value))
     {
        alert("Escribir bien el mail...");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
     }

    if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)))
    {
        alert("Escribir bien el mail...");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return ;
    }

    if(categoria.value==="")
    {
        alert("Escribir apellido...");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }


    let totalValorTickets=(cantidadTickets.value)*valorTicket;

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }
    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }
    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }
    totalPago.innerHTML=totalValorTickets;
}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}

function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML="";
}

btnResumen.addEventListener("click",total_a_pagar);
btnBorrar.addEventListener("click",reset_total_a_pagar);