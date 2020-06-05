import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function formatId(id) {
    return ('000' + id).slice(-3);
}
class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props.attr;
        const formatted_id = formatId(id);
        let imgSrc = `${POKE_API}${formatted_id}.png`;

        return (
            <div className={"Pokecard " + type}>
                <div className="Pokecard-header">
                    <p className="Pokecard-id">#{formatted_id}</p>
                    <p className="Pokecard-exp">{base_experience} XP</p>
                </div>
                <div className="Pokecard-media">
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