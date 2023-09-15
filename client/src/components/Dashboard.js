import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Dashboard = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/recetas")
            .then(res => setRecetas(res.data))
            .catch( err => {
                console.log(err);
            });
    }, [])

    return(
        <div>
            <h1>Recetas</h1>
            <Link to="/recetas/nueva">
                <button>Nueva receta</button>
            </Link>

            {recetas.map((receta, index) =>(
                <div key={index}>
                    <img src={receta.imagen}></img>
                    <h2>{receta.titulo}</h2>
                    <Link to={`/receta/${receta._id}`}>
                        <button>Ver receta</button>
                    </Link>
                </div>
            ))
            }
        </div>
    );
}

export default Dashboard;