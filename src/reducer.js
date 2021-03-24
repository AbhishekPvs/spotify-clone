export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null, 
    // token: "BQAwhS4pNU6sK0JW1VLYtNW9yVnjd7-bkMI6fwPzMwQ7sIzByxVnbZKTFJuqJUDkSKBk531pBKiNwwy3Z2IFljPhIrNqHS9lZR8Sv3R-GsVNDLTPTXnyhM1eo9PU76xf8AOsy09cEgTHRv9nXkC_2n8RSkCxOmHMOmRIMLFJpb6hczLQ"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;