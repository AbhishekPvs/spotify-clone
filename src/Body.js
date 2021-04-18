import React , {  useState } from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body({ spotify }) {
 
    const [{ discover_weekly,user_play_list_tracks,user_play_list_img, user_play_list }, dispatch] = useDataLayerValue();
    const [val, setVal] = useState(null)
    const [val1, setVal1] = useState(null)
    const playPlaylist = (id) => {
      spotify
        .play({
          context_uri: `spotify:playlist:37i9dQZEVXcS2eRn07N1BI`,
        })
        .then((res) => {
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
    };
  
    const playSong = (id) => {
      spotify
        .play({
          uris: [`spotify:track:${id}`],
        })
        .then((res) => {
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
    };
  
    
  
      if(val === null)
      {
        if(user_play_list_tracks.length !== 0)
        {
          const val = 1;
          const val1 = 1;
          setVal(val);
          setVal1(val1);

        }
      }
      const set_the_tracks = () =>
      {
        if(val1 === null)
        {
          return(
            <div>
                  <div className="body__info">
                    <img src={discover_weekly?.images[0].url} alt="" />
                  <div className="body__infoText">
                  <strong>PLAYLIST</strong>
                  <h2>Discover Weekly</h2>
                  <p>{discover_weekly?.description}</p>
                  </div>
            </div>
  
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon
              className="body__shuffle"
              onClick={playPlaylist}
            />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
  
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
          ))}
        </div>
        </div>
          )
        }
      }
    return (
        <div className="body">
            <Header spotify={spotify} />
            {val && 
            <div>
            <div className="body__info">
              <img src={user_play_list_img} alt="" />
                  <div className="body__infoText">
                  <strong>PLAYLIST</strong>
                  <h2>{user_play_list.name}</h2>
                  <p>{user_play_list.description}</p>
                  </div>
            </div>
            {user_play_list_tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
              ))}


            </div>
            }
            {set_the_tracks()}

        </div>
    )
}



export default Body;
