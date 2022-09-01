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

export function getPokemonsbyName(name){
    return async function(dispatch){
        const jsonName = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        dispatch({
            type: 'GET_BY_NAME', 
            payload: jsonName.data
        })
    }
}

// recibe como argumento el valor que llega del objeto
export function getTypes(){
    return async function(dispatch){
        const jsonType = await axios.get('http://localhost:3001/types')
        dispatch({
            type: 'GET_TYPES',
            payload: jsonType.data
        })
    }
}

export function filterbyTypes(payload){
    return {
        type: 'FILTER_BY_TYPES',
        payload
    }
}

export function filterbyCreated(payload){
    return {
        type: 'FILTER_BY_CREATED',
        payload: payload
    }
}

export function orderByAttack(payload){
    return({
        type: 'ORDER_BY_ATTACK',
        payload
    })
}

export function orderByAlphabet(payload){
    return ({
        type: 'ORDER_BY_NAME', 
        payload: payload
    })
}

export function ClearDetail(){
    return {
        type: 'CLEAR_DETAIL'
    }
}