import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterbyTypes, filterbyCreated, orderByAttack, orderByAlphabet } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Filtering from "./Filtering";
import Paginate from "./Paginate";
import Nav from './Nav'

import '../CSS/Home.css'


export default function Home(){

    const dispatch = useDispatch() // poder despachar acciones  
    const allPokemon = useSelector((state) => state.pokemons) // mapstatetoprops
    const allTypes = useSelector(state => state.types)
    const [orderAttack, setOrderbyAttack] = useState('Order by attack')
    const [order, setOrder] = useState('')



    const [currentPage, setcurrentPage] = useState(1)
    const [charging, setCharging] = useState(false)
    const [pokemonsPerPage, setpokemonsPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemon ? allPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon) :[]
    


    const paginado = (pagenumber) => {
        setcurrentPage(pagenumber)
    }
    
    useEffect(() => {
        setCharging(true)
        dispatch(getPokemons()) // mapdispatchtoprops
        dispatch(getTypes())
    }, [dispatch]) // lo que se incluye es de lo que depende el componente, dependencias entre esta y otra componente. 
                    // se importan dichas dependencias
    //evento - 

    useEffect(() => {
        if(allPokemon.length > 0) setCharging(false)
    }, [JSON.stringify(allPokemon)])



    function handleClick(event){
        event.preventDefault()
        dispatch(getPokemons())
    }

    function handleFilterType(e){
        dispatch(filterbyTypes(e.target.value))
        setcurrentPage(1)
    }

    function handleFilterCreated(e){
        dispatch(filterbyCreated(e.target.value))
        setcurrentPage(1)
    }

    function handleOrderByAttack(e){
        e.preventDefault()
        dispatch(orderByAttack(e.target.value))
        setOrderbyAttack(`Ordered by: ${e.target.value}`)
    }

    function handleOrderByAlphabet(e){
        e.preventDefault()
        dispatch(orderByAlphabet(e.target.value))
        setOrder(`Ordered by: ${e.target.value}`)
    }


    return (
        <div>
            <div className="1">
                <Filtering handleClick={handleClick}
                handleFilterType={handleFilterType}
                allTypes={allTypes} 
                handleFilterCreated={handleFilterCreated}
                handleorderByAttack={handleOrderByAttack}
                orderAttack={orderAttack}
                handleOrderByAlphabet={handleOrderByAlphabet}/>
            </div>

            <div>
                <Nav isLoading={charging} setIsLoading={setCharging} />
            </div>
            <br></br>

            <div className="two">
            {
                    currentPokemons.length > 0 && currentPokemons.map(comp => {
                        return (
                            <div>
                            <Link to={"/home/" + comp.id}>
                            <Card name={comp.name} 
                            attack={comp.attack}
                            life={comp.life}
                            types={comp.types}
                            id={typeof comp.id}/>
                        </Link>
                            </div>

                        )
                    })
                }
            </div>
            <Paginate pokemonsPerPage={pokemonsPerPage} 
                    allPokemonsLength={allPokemon.length}
                    paginado={paginado}>
                </Paginate>
        </div>
    )

}