import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home(){
    const dispatch = useDispatch() // poder despachar acciones
    const AllPokemons = useSelector((state) => state.characters) // mapstatetoprops

    useEffect(() => {
        dispatch(getPokemons()) // mapdispatchtoprops
    }, [dispatch]) // lo que se incluye es de lo que depende el componente, dependencias entre esta y otra componente. 
                    // se importan dichas dependencias

    //evento - 
    function handleClick(event){
        event.preventDefault()
        dispatch(getPokemons())
    }

    return (
        <div>
            <Link to='/pokemons'> Create Pokemon </Link>
            <h1> PokeApp - Pokemon Data </h1>
            <button onClick={ev => {handleClick(ev)}}>
                Charge Again
            </button>
            <div>
                {/* //order by name or attack*/}
                <select name='All'>
                    <option value='ascendn'> Ascendent (Name) </option> {/* acceder y preguntar: dependiendo el valor hace algo */}
                    <option value='desc'> Descendent (Name) </option>
                    <option value='asca'> Ascendent (Attack) </option>
                    <option value='desca'> Descendent (Attack) </option>
                    <button>lklgbnl</button>

                </select>
                {/* //Order by db or api */}
                <select>
                    <option value='all'> All </option>
                    <option value='cr'> Created </option>
                    <option value='imp'> Imported </option>
                </select>
                {
                    AllPokemons?.map(comp => {
                        return (
                        <Card name={comp.name} type={comp.id} attack={comp.attack} />
                        )
                    })
                }
                {}
            </div>
        </div>
    )

}