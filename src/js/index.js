/*creando el evento del boton de contactame*/

document.getElementById("idBtnEnviar").addEventListener("click", function(){
    let strNombre= document.getElementById("inputNombre").value;
    let strCorreo= document.getElementById("inputEmail").value;
    let strAsunto= document.getElementById("inputSobjet").value;
    let strMensaje= document.getElementById("inputMensaje").value;

    /*verificar que no se encuentren vacios los inputs*/
    if(strNombre != "" && strCorreo != "" && strAsunto !="" && strMensaje !="") {
        let datos ={
            nombre: strNombre,
            correo: strCorreo,
            asunto: strAsunto,
            mensaje: strMensaje,
        };
        Promise.resolve(datos) 
          .then(function(response){
              document.getElementById("inputNombre").value="";
              document.getElementById("inputEmail").value="";
              document.getElementById("inputSobjet").value="";
              document.getElementById("inputMensaje").value="";
          }).catch(function(error){
              console.log(error);
          })
    } else {
        alert("Porfavor revisa  todos los campos");
    }
});

