const InitialState = {
    pokemons: [],
    pokemon: [],
    detail: [],
    types: []
}
function rootReducer(state = InitialState, action){
    switch (action.type) {
        case 'GET_POKEMONS':
            // en el estado characters vacío se manda lo que mande la acción characters
            return {
                ...state, 
                pokemons: action.payload,
                pokemon: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state, types: action.payload
            }
        
        case 'GET_BY_NAME':
            return {
                ...state, 
                pokemons: action.payload?.msg ? [] : action.payload
            }

        case 'GET_BY_ID':
            return {
                ...state, detail: action.payload
            }
        
        case 'FILTER_BY_TYPES':
            const allPokemons = state.pokemon
            const newData = allPokemons.map(p => ({...p, types: p.types.map(t => t?.name ? t.name: t)}))
            const filterType = 
                action.payload === 'Types'
                ? newData 
                : newData.filter(e => e.types.includes(action.payload))
            return {
                ...state, pokemons: filterType
            }

        case 'FILTER_BY_CREATED':
            const filterCreated = 
            action.payload === 'Created'
            ? state.pokemon.filter(e => typeof e.id === 'string')
            : state.pokemon.filter(e => typeof e.id === 'number')
            return {
                ...state, 
                pokemons: action.payload === 'All' ? state.pokemon : filterCreated
            }

        case 'ORDER_BY_ATTACK':
            let attack = action.payload === 'attack'
            ? state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return 1 
                }
                else if(a.attack < b.attack){
                    return -1
                }
                else{
                    return 0
                }
            })
            : state.pokemons.sort(function(a,b){
                if(a.attack < b.attack){
                    return 1
                }
                else if(a.attack > b.attack){
                    return -1 
                }
                else{
                    return 0
                }
            })
            return {
                ...state, pokemons: attack
            }
        
        case 'ORDER_BY_NAME':
            const order = action.payload === 'asc'
            ? state.pokemons.sort(function(a,b){
                if(a.name > b.name){
                    return 1
                }
                else if(a.name < b.name){
                    return -1 
                }
                else{
                    return 0
                }
            }) 
            : state.pokemons.sort(function(a,b){
                if(a.name < b.name){
                    return 1
                } 
                else if(a.name > b.name)
                {
                    return -1
                }
                else {
                    return  0
                }
            })
            return {
                ...state, 
                pokemons: order
            }


        case 'CLEAN_DETAIL':
            return {
                ...state, 
                detail: []
            }

        default:
            return state;
    }
}




export default rootReducer