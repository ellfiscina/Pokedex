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
                <div className="Pokecard-media">
                    <p className="Pokecard-exp">{base_experience} XP</p>
                    <img src={imgSrc} alt={name} />
                </div>
                <hr />
                <h2 className="Pokecard-name">{name}</h2>
                <p className="Pokecard-type">{type}</p>
            </div>
        );
    }
}

export default Pokecard;