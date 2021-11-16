import EpisodeData from "./dataEpisode/EpisodeData";
import { useSelector } from "react-redux";
import EpisodeList from "./EpisodeList";
import EpisodeCreate from "./EpisodeCreate";


export default function NewEpisode(props) {
    const position = useSelector( state => state.global.position );
    return  <div>
                {position === 0 &&  <EpisodeData />}
                {position === 1 &&  <EpisodeCreate />}
                {position === 2 &&   <EpisodeList />}
                
            </div>
}