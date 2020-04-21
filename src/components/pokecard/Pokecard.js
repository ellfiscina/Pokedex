import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function formatId(id) {
    return ('000' + id).slice(-3);
}
class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props.attr;
        let imgSrc = `${POKE_API}${formatId(id)}.png`;

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