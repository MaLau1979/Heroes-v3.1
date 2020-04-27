const fs = require('fs');
var heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroesController = {
   
    index: (req,res) =>{
        res.send(heroes);
    },
    mostrarDetalle: (req, res) =>{
        let heroe = heroes.find(heroe => heroe.id == req.params.id);

        if(heroe != undefined) {
            res.send("Hola, mi nombre es " + heroe.nombre + " y soy " + heroe.profesion);
        } else {
            res.send("No hay heroe con ese id");
        }
    },
    mostrarBio: (req, res) =>{
        let heroe = heroes.find(heroe => heroe.id == req.params.id);
            if (heroe == undefined) {
            res.send("No encontramos un héroe para mostrarte su biografía");
            } else {
            if (req.params.ok != undefined && req.params.ok == 'ok') {
            res.send("Hola, mi nombre es " + heroe.nombre + "y esto esta es mi reseña: " + heroe.resenia);
            } else {
            res.send("Hola, mi nombre es " + heroe.nombre +  "Lamento que no desees saber más de mi :(");
            }
        }

    }
}


module.exports = heroesController;