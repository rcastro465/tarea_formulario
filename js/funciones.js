function validaformulario(){
var formulario = new Object();

var nombre =document.getElementById("nombre").value;
var apemate =document.getElementById("apemate").value;
var apepate =document.getElementById("apepate").value;
var email =document.getElementById("email").value;
var telefono =document.getElementById("telefono").value;
var direccion =document.getElementById("direccion").value;
var mensaje='';


if (direccion!=''){
    formulario["direccion"]=direccion;
    console.log(formulario);
    }else{
        mensaje= document.getElementById('mensaje1');
        mensaje.innerHTML="Ingrese  direccion"; 
    }
    if (telefono!=''){
        formulario["telefono"]=telefono;
        console.log(formulario);
        }else{
            mensaje= document.getElementById('mensaje1');
            mensaje.innerHTML="Ingrese  telefono"; 
        }

        if (email!=''){
            formulario["email"]=email;
            console.log(formulario);
            }else{
                mensaje= document.getElementById('mensaje1');
                mensaje.innerHTML="Ingrese  email"; 
            }
            
            if (apepate!=''){
                formulario["apepate"]=apepate;
              console.log(formulario);
              }else{
                  mensaje= document.getElementById('mensaje1');
                  mensaje.innerHTML="Ingrese apellido paterno"; 
              }
              
              if(apemate!=''){
                formulario["apemate"]=apemate;
                console.log(formulario);
            
            }else{
                mensaje= document.getElementById('mensaje1');
                mensaje.innerHTML="Ingrese apellido materno"; 
            }
            
            


if(nombre!=''){
formulario["nombre"]=nombre;
console.log(formulario);

}else{
    mensaje= document.getElementById('mensaje1');
    mensaje.innerHTML="ingresa el nombre"; 
}



  
if (nombre!='' && email!='' && apemate!='' && apepate!='' && direccion!='' && telefono!=''){
    formulario["nombre"]=nombre;
    formulario["email"]=email;
    mensaje= document.getElementById('mensaje1');
    mensaje.innerHTML="Datos ingresados correctamente"; 
    alert("Datos ingresados correctamente");
}


}


function ValidarCorreo(){
    var regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo =document.getElementById("email").value;
    var msgCorreo=document.getElementById("mensaje1");
  
   if(!regex.test(correo)){
  msgCorreo.innerText="Ingrese un correo Valido!";
  msgCorreo.classList.remove("borrar");
  msgCorreo.classList.remove("exito");
  msgCorreo.classList.add("error");
   }else{
    msgCorreo.innerText="";
   }
}