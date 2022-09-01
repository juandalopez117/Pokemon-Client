import React from "react";
export default function Card({name, attack, life, types, id}){
    //renderizar imagen

   

    return (
        <div>
            <h3> {name} </h3>
            <h5> Attack: {attack} </h5>
            <h5> Life: {life} </h5>
            <h5> Id: {id} </h5> 
            <h5>Types:  {types[0]}, {types[1]} </h5>

        </div>
    )
}