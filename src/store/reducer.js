const initialState = {
    urlID : null
}

const reducer = (state = initialState, action) => {
    if(action.type == 'URL_MOVIE_DETAILS'){
        return {
            ...state, 
            urlID: action.urlID

        }
    }
    return state
}

export default reducer