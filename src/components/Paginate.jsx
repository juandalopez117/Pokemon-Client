import React from "react"
import { useState, useEffect } from "react"

// renderiza los números de pagina
// se traen las propiedades de la componente Home necesarias para el paginado

export default function Paginate({pokemonsPerPage, allPokemonsLength, paginado}){
    // arreglo de números de página
    
    const [pageNumbers, setPageNumber] = useState([])
    useEffect( () => {
        const pageNumbers = []
        for(let i = 0; i < Math.ceil(allPokemonsLength / pokemonsPerPage); i++) {
            pageNumbers.push(i+1)
        }
        setPageNumber(pageNumbers)
    }, [allPokemonsLength, pokemonsPerPage])

    
/*     // Añade los números de página, divide la cantidad total de personajes entre los números por pagina
    for (let i = 1; i <= Math.ceil( allPokemonsLength / pokemonsPerPage); i++){
        pageNumbers.push(i)
    } */
    // renderiza los números de página
    return(
        <div>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => (
                        <button onClick={() => paginado(number)} key={`${number}paginado`} className= 'pagination'>
                            {number}
                        </button>
                    ))
                }
            </ul>
        </div>
    )
}