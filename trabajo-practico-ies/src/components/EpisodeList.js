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
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode/");
    
    useEffect( () => {
        
        (async ()  => {
            const response = await axios.get(url);
            if(response.status === 200) {
                const {info, results} = response.data;
                setPages(info.pages)
                setInfo(info);
                setEpisodes([...results]);
                setTotal([info.count]);
                //setPages([info.pages])
                console.log(info)
            }else{
                setInfo(null);
                setTotal(null);
                setEpisodes([]);       
             }
        })();
  
    }
    ,[url]);

    const nextPage = (newUrl) => {
        if(newUrl) {
            setUrl(newUrl);
        }
    }


    return <div>
               
                <h2>La cantidad total de episodios es: {total} en {pages} paginas</h2>
                <Paginacion info={info} clickPrev={nextPage} clickProx={nextPage}/>
                <table border={1} className="container">
                    
                    <tr >
                        <th>ID</th><th>Nombre</th><th>Lanzamiento</th><th>Episodio</th>
                    </tr>
                    
                    {episodes.map((c, idx) => <EpisodeItem key={idx} episode={c}/>)}
                    
                </table>
                <Link to="/episodios/new" className="btn btn-dark">+ Agregar</Link>
                
            </div>
}