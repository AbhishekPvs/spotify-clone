import React , {  useState }  from 'react';
import "./SidebarOption.css";
import { useDataLayerValue } from './DataLayer';


function SidebarOption(data) {
const {title,id,spotify,Icon} = data
const [{ discover_weekly, user_play_list_tracks, user_play_list_img}, dispatch] = useDataLayerValue();

 const getdata = (id) =>
{    
 spotify.getPlaylistTracks(id).then((response) => {
     dispatch({
    type: "SET_PLAY_LIST_TRACKS",
    user_play_list_tracks: response,
  })
 });
 spotify.getPlaylistCoverImage(id).then((response) => {
     
    dispatch({
   type: "SET_PLAY_LIST_IMG",
   user_play_list_img: response[0].url})
});

 spotify.getPlaylist(id).then((response) => {
     
    dispatch({
   type: "SET_PLAY_LIST",
   user_play_list: response,
 })
});

}

    return (
        <div className='sidebarOption'>
           {Icon && <Icon className="sidebarOption__icon"/>}
           {Icon ? <h4>{}</h4> : <p onClick = {() => getdata(id)} >{title}</p>}
           
           
        </div>
    )
}

export default SidebarOption
