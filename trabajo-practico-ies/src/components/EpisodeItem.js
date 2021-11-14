import { Link, useHistory } from "react-router-dom";
import React from "react";

export default function EpisodeItem( {episode} ) {
    // const history = useHistory();

    // const goTo = () => {
    //     history.push(`https://rickandmortyapi.com/api/episode/${episode.id}`);
    // }
    
    return <React.Fragment>
                <tr>
                    <td>{episode.id}</td>
                    <td>{episode.name}</td>
                    <td>{episode.air_date}</td>
                    <td>{episode.episode}</td>
                    <Link to={`/Episode/${episode.id}`}>Ver</Link>
                </tr>
            </React.Fragment>
}

