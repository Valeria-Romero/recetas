import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const NuevaReceta = () => {
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tipo, setTipo] = useState("");
    const [tiempo, setTiempo] = useState();
    const [gluten, setGluten] = useState(true);
    const [diabeticos, setDiabeticos] = useState(true);
    const [errores, setErrores] = useState({}); //errores.ATRIBUTO.message

    const navigate = useNavigate();

    const guardarReceta = (e) =>{
        e.preventDefault();
        console.log(titulo, imagen, descripcion, tipo, tiempo, gluten, diabeticos);
        axios.post("http://localhost:8000/api/recetas/guardar", {
            titulo,
            imagen,
            descripcion,
            tipo,
            tiempo,
            gluten,
            diabeticos
        })
        .then(res => navigate("/"))
        .catch(err => setErrores(err.response.data.errors))
    }

    return(
        <div>
            <h1>Nueva receta</h1>
            <form onSubmit={guardarReceta}>
                <div>
                    <label>Titulo de receta: </label>
                    <input type="text" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)}></input>
                    {errores.titulo ? <p>{errores.titulo.message}</p> : null}
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type="text" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)}></input>
                    {errores.imagen ? <p>{errores.imagen.message}</p> : null}
                </div>
                <div>
                    <label>Descripcion: </label>
                    <textarea name="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
                    {errores.descripcion ? <p>{errores.descripcion.message}</p> : null}
                </div>
                <div>
                    <label>Tipo: </label>
                    <select name="tipo" onChange={e => setTipo(e.target.value)} defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Seleccione uno</option>
                        <option value="Desayuno">Desayuno</option>
                        <option value="Almuerzo">Almuerzo</option>
                        <option value="Cena">Cena</option>
                    </select>
                </div>
                <div>
                    <label>Tiempo: </label>
                    <input type="number" name="tiempo" value={tiempo} onChange={e => setTiempo(e.target.value)}></input>
                    {errores.tiempo ? <p>{errores.tiempo.message}</p> : null}
                </div>
                <div>
                    <input type="checkbox" name="gluten" checked={gluten} onChange={gluten ? e => setGluten(false) : e => setGluten(true)}></input>
                    <label>Gluten free</label>
                </div>
                <div>
                    <input type="checkbox" name="diabetivos" checked={diabeticos} onChange={diabeticos ? e => setDiabeticos(false) : e => setDiabeticos(true)}></input>
                    <label>Apto para diabeticos</label>
                </div>
                <input type="submit" value="Agregar receta"></input>
            </form>
        </div>
    );
}

export default NuevaReceta;