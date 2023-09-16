const recetasController = require("../controllers/recetas.controller");

module.exports = (app) => {
    app.post("/api/recetas/guardar", recetasController.guardarReceta);
    app.get("/api/recetas", recetasController.buscarRecetas);
    app.get("/api/receta/:id", recetasController.buscarReceta);
    app.delete("/api/receta/borrar/:id", recetasController.borrarReceta);
    app.put("/api/receta/actualizar/:id", recetasController.actualizarReceta);
}