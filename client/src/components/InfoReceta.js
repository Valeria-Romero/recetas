import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const InfoReceta = ()=>{
    const [receta, setReceta] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () =>{
        axios.get("http://localhost:8000/api/receta/" + id)
        .then((res) => {
            setReceta(res.data)
        }).catch((err) => {
            console.log(err)
        });
    }, [id] )

    const borrarReceta = (id) => {
        axios.delete("http://localhost:8000/api/receta/borrar/" + id)
        .then( res => navigate("/"))
        .catch(err => console.log(err));
    }


    return(
        <div>
            <h1>{receta.titulo}</h1>
            <img src={receta.imagen}></img>
            <p>Tiempo de preparacion: {receta.tiempo}</p>
            <p>Descripcion: {receta.descripcion}</p>
            {/* A editar */}
            <div>
                <input type="checkbox" checked={receta.gluten}></input>
                <label>Gluten free</label>
            </div>

            <div>
                <input type="checkbox" checked={receta.diabeticos}></input>
                <label>Apto para diabeticos</label>
            </div>
            {/*  */}

            <button onClick={() => borrarReceta(receta._id)}>Borrar receta</button>
        </div>
    );
}

export default InfoReceta;