export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    top_artists: null,
    playing: false,
    item: null,
    // token: "BQAwhS4pNU6sK0JW1VLYtNW9yVnjd7-bkMI6fwPzMwQ7sIzByxVnbZKTFJuqJUDkSKBk531pBKiNwwy3Z2IFljPhIrNqHS9lZR8Sv3R-GsVNDLTPTXnyhM1eo9PU76xf8AOsy09cEgTHRv9nXkC_2n8RSkCxOmHMOmRIMLFJpb6hczLQ"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
              ...state,
              user: action.user,
            };
      
          case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };
      
          case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
      
          case "SET_DISCOVER_WEEKLY":
            return {
              ...state,
              discover_weekly: action.discover_weekly,
            };
      
          case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };
      
          case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
            };
      
          case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };
      
          case "SET_PLAYLISTS":
            return {
              ...state,
              playlists: action.playlists,
            };
            
        default:
            return state;
    }
}

export default reducer;