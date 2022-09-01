import React from "react";
import { Link } from "react-router-dom";

export default function Filtering({handleClick, 
                                   handleFilterType, 
                                   allTypes, 
                                   handleFilterCreated,
                                   orderAttack, 
                                   handleorderByAttack,
                                   handleOrderByAlphabet}){

    return (
        <div>
            <Link to='/pokemons'> Create Pokemon </Link>
            <h1> PokeApp - Pokemon Data </h1>
            <button onClick={ev => {handleClick(ev)}}>
                Charge Again
            </button>
            <div>
                {/* //order by name or attack*/}

                <select defaultValue='Order by Name' onChange={e => handleOrderByAlphabet(e)}>
                    <option value=''> Order By Name </option>
                    <option value='asc'> From A to Z </option> {/* acceder y preguntar: dependiendo el valor hace algo */}
                    <option value='desc'> From Z to A </option>
                </select>


                <select defaultValue={orderAttack} onChange={ e => handleorderByAttack(e)}>
                    <option value = ''> Order By Attack </option>
                    <option value='attack'> Attack up </option>
                    <option value='low'> Attack down </option>

                </select>

                {/* //Order by db or api */}
                <select onChange={e => handleFilterCreated(e)}>
                    <option value=''> Filter by status</option>
                    <option value='All'> All </option>
                    <option value='Created'> Created </option>
                    <option value='Imported'> Imported </option>
                </select>


                <select onChange={(e) => handleFilterType(e)} className='boton'>
                            <option value="Types"> Filter by types </option>
                            {
                                allTypes.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))
                            }
                </select>
            </div>
        </div>
    )
}