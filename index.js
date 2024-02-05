const express = require('express');
const path = require("path");
const router = express.Router();

//Initializations
const app = express();

//Setings
app.set('port', process.env.PORT || 3000);

//Midelwares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routers
app.use(router.get('/', (req, res) => {
    res.json({
        status: 'Hola Mundo!'
    });
}));

//Static files
app.use(express.static(path.join(__dirname, 'dist')));

//Starting server
const server = app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});