let express=require('express');
let webpack= require('webpack');
let webpackDevMiddleware= require('webpack-dev-middleware');
let webpackConfig = require('./webpack.config');
/*para poder recibir correos con express*/
let badyParser= require('body-parser');

const email = require('./email');

let app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/static', express.static('dist'));
app.use(badyParser.json());
/*Codificacion de caracteres */
app.use(badyParser.urlencoded({ extended: true }));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

const oEmail = new email({
   host: "https://pamela-c-torres-gtz.github.io/Portafolio/src/index.html",
   port: 3535,
   secure: false,
   auth: {
       type:"login",
       user:"pamelatgtz@gmail.com",
       pass:"programacion0323732",
   }

});

app.get('/', function (req, res, next) {
    res.send('Pamela');
});

app.post('/api.contacto', function(req, res, next){
  let email = {
      from:"",
      to: "pamelatgtz@gmail.com",
      subject:"Nuevo mensaje de usuario",
     html:`
         <div>
         <p>Nombre: ${req.bady.nombre} </p>
         <p>Correo: ${req.bady.correo} </p>
         <p>Asunto: ${req.bady.asunto} </p>
         <p>Mensaje: ${req.bady.mensaje}  </p>
         </div>
     ` 
  };
  
  oEmail.enviarCorreo(email);
  res.send("ok");
});

app.listen(app.get('port'), () => {
    console.log('Servidor activo 1');
})