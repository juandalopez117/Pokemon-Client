import React from "react";
export default function Card({name, type, attack}){
    //renderizar imagen
    return (
        <div>
            <h3> {name} </h3>
            <h5> {type} </h5>
            <h5> {attack} </h5>
        </div>
    )
}