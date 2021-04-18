import React, {  useEffect } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();
console.log(spotify)

function App() {
                                  
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(token)
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylistTracks().then((playlistsTracks)=>{
        dispatch({
          type: "SET_PLAYLISTS_TRACKS",
          playlistsTracks: playlistsTracks,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcS2eRn07N1BI').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      });
      
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
    }
    
    
  }, [token, dispatch]); 


  return (
    <div className="app">
      {
        token ? 
          <Player spotify = {spotify} />
        : 
          <Login/>
          }
        
    </div>
  );
}

export default App;
