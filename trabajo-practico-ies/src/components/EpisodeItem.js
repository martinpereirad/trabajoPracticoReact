import { Link } from "react-router-dom";
import React from "react";

export default function EpisodeItem( {episode} ) {
    
    
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

