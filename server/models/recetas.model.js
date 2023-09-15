const mongoose = require("mongoose");

const recetasSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, "Titulo no puede estar vacio"]
        },
        imagen: {
            type:String,
            required: [true, "Imagen no puede ir vacio"]
        },
        descripcion: {
            type:String,
            required: [true, "Descripcion no puede ir vacio"]
        },
        tipo: {
            type:String,
            required: [true, "Tipo no puede ir vacio"]
        }, 
        tiempo: {
            type:Number,
            required: [true, "Tiempo no puede ir vacio"]
        },
        gluten: {
            type:Boolean,
            default: true
        },
        diabeticos: {
            type: Boolean,
            default: true
        }
    }, {timestamps: true, versionKey: false}
)

const recetas = mongoose.model("recetas", recetasSchema);
module.exports = recetas;