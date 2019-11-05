/*creando el evento del boton de contactame*/
/*const axios = require("axios");*/

/*AOS.init();*/

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
        /*SE instala npm i axios para realizar la conexion con el archivo de contacto */
        axios.post('/api/contacto', datos)
       /*Promise.resolve(datos) */
          .then(function(response){
              document.getElementById("inputNombre").value="";
              document.getElementById("inputEmail").value="";
              document.getElementById("inputSobjet").value="";
              document.getElementById("inputMensaje").value="";
              alert('Gracias por escribirme, en breve te contactaré');
          }).catch(function(error){
              console.log(error);
          })
    } else {
        alert("Porfavor revisa  todos los campos");
    }
});

