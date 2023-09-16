const Recetas = require("../models/recetas.model");

// por ejemplo <getObjects>
// const <nombre del metodo> = (req, res) => {
    // examen.find()
        // .then()
        // .catch()
// };

const guardarReceta = (req, res) => {
    Recetas.create(req.body)
        .then(receta => res.json(receta))
        .catch(err => {
            res.status(400).json(err);
        })
}

const buscarRecetas = (req, res) =>{
    Recetas.find().sort({titulo: 1})
        .then(recetas => res.json(recetas))
        .catch(err => {
            res.status(400).json(err);
        })
}

const buscarReceta = (req, res) => {
    Recetas.findOne({_id: req.params.id})
        .then(receta => res.json(receta))
        .catch(err => {
            res.status(400).json(err);
        })
}

const borrarReceta = (req, res) =>{
    Recetas.deleteOne({_id: req.params.id})
        .then(receta => res.json(receta))
        .catch(err => {
            res.status(400).json(err);
        })
}

const actualizarReceta = (req, res) => {
    Recetas.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(receta => res.json(receta))
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports = {
    guardarReceta,
    buscarRecetas,
    buscarReceta,
    borrarReceta,
    actualizarReceta
}