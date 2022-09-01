import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsbyName } from "../actions";


export default function SearchBar({isLoading, setIsLoading}){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const Pokemons = useSelector(state => state.pokemons)

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        dispatch(getPokemonsbyName(name))
    }

    useEffect(() => {
        if(Pokemons.length > 0) setIsLoading(false)
    }, [JSON.stringify(Pokemons)])

    return (
        <div>
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
            />
            <button type="Submit" onClick={(e) => handleSubmit(e) }> Search </button>
        </div>
    )
} 