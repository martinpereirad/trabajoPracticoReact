import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    useParams,
    Link,
    useHistory
} from "react-router-dom";
import CharacterItem from "./CharacterItem";


export default function Episode(props) {
    const {id} = useParams();
    const [episode, setEpisodes] = useState([null]);
    useEffect( () => {
        
        //Llamada a backend con then
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then( (response) => {
            
             if(response && response.status === 200){
                const EpisodeInfo = response.data;
                setEpisodes(EpisodeInfo);
            }else {
                setEpisodes(null);
            }
        });
    }, [id]);
    return <div>
                <header>
                    <Link to="/" className="btn btn-dark">
                        Inicio
                    </Link>
                    <Link to="/user" className="btn btn-dark">
                        User
                    </Link>
                    <Link to="/episodios" className="btn btn-dark">
                        Episodios
                    </Link>
                </header>
                <hr/>
                <h2>Episodio ID {id}</h2>
                { episode && <React.Fragment>
                                    
                                    <h3>Nombre episodio: {episode.name}</h3>
                                    <CharacterList characters={episode.characters}/>
                                    
                                </React.Fragment>}
            </div>

}

function CharacterList({ characters=[] }) {
    const history = useHistory();
    const goTo = () => {
        const id= "";
        history.push(`/character/${id}`)
    };
    return <div>
        
        { <ul>
            {characters.map((e, idx) => <li key={idx} onClick={goTo}> {e}</li>)}
        </ul> 
        }
    </div>
}


