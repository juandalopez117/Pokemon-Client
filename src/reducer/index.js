const InitialState = {
    Pokemons: [],
}


function rootReducer(state = InitialState, action){
    switch (action.type) {
        case 'GET_POKEMONS':
            // en el estado characters vacío se manda lo que mande la acción characters
            return {
                ...state, 
                characters: action.payload
            }
        default:
            return state;
    }


}

export default rootReducer