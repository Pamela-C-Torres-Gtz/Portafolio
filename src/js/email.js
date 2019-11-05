const nodemailer = requiere('nodemailer');
/*se instala npm i nodemailer para poder enviar correo */

class Email {
    /*Se crea un construcctor */
    constructor(oConfig) {
        this.createTransport = nodemailer.createTransport(oConfig);
    }
    /*metodo enviar correo */
    enviatCorreo(oEmail){
      /*try catch nos sirve para encaso de no enviar el email o tengamos un error nos indique cual es ese error en consola */ 
        try{
           this.createTransport.sendMail(oEmail, function (error, info) {
             if(error){
                 console.log('Error al enviar correo');
             } else {
                 console.log('Correo enviado correctamente');
             }
             this.createTransport.close();
           });
        }catch(x){
            console.log('Email.enviarCorreo -- Error--' + x);
        }
    }
}
module.exports = Email;