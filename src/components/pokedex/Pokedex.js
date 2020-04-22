import React, {Component} from 'react';
import Pokecard from '../pokecard/Pokecard';
import {pokemonList} from '../../helpers';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return(
            <div className="Pokedex">
                <div className="Pokedex-grid">
                    {pokemonList.map(i => <div className="Pokedex-item" key={i.id}><Pokecard attr={i}/></div>)}
                </div>
            </div>
        );
    }
}

export default Pokedex;