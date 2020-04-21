import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props.attr;
        let imgSrc = `${POKE_API}${id}.png`;
        return (
            <div className="Pokecard">
                <h1>{name}</h1>
                <img src={imgSrc} alt={name} />
                <p>Type: {type}</p>
                <p>Exp: {base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;