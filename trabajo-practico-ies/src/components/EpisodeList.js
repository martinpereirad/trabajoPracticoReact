import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EpisodeItem from './EpisodeItem';
import Paginacion from "./Paginacion.js";
import NewEpisode from "./NewEpisode";
export default function EpisodesList(props) {
    const [episodes, setEpisodes] = useState([]); //array vacio
    const [pages, setPages] = useState(null);
    const [total, setTotal] = useState(null);
    const [info, setInfo] = useState(null);
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode/?name=");
    const [search, setSearch] = useState("");
    

    useEffect( () => {
        
        (async () => {

            const Response = await axios.get(`${url}${search}`)
                .catch(e => {
                    setEpisodes([]);
                });


            if (Response && Response.status === 200) {
                const { info, results } = Response.data;
                setInfo(info);
                setEpisodes([
                    ...results,
                ]);
                setTotal(info.count)
                setPages(info.pages)
            } else {

                setInfo(null);
                setEpisodes([]);
                
            }
        })();


    }, [url, search]);
    const nextPage = (newUrl) => {
        if(newUrl) {
            setUrl(newUrl);
        }
    }


    return <div>
               
                <h2>La cantidad total de episodios es: {total} en {pages} paginas</h2>
                <Paginacion info={info} clickPrev={nextPage} clickProx={nextPage}/>
                <label>Buscar Episodio: </label>
                <input onChange={(e) => {
                    setSearch(e.target.value)
                }} type= "text" />
                <table border={1} className="container">
                    
                    <tr >
                        <th>ID</th><th>Nombre</th><th>Lanzamiento</th><th>Episodio</th>
                    </tr>
                    
                    {episodes.map((c, idx) => <EpisodeItem key={idx} episode={c}/>)}
                    
                </table>
                <Link to="/episodios/new" className="btn btn-dark">+ Agregar</Link>
                
            </div>
}