import axios from 'axios'

export function getPokemons(){
    return async function(dispatch){
        // conexion back-front
        // con fetch toca encadenar promesas
        var json = await axios.get('http://localhost:3001/pokemons') 
        return dispatch({
            type: 'GET_POKEMONS', 
            payload: json.data
        })
    }
}