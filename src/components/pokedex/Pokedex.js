import React, {Component} from 'react';
import Pokecard from '../pokecard/Pokecard';
import {pokemonList} from '../../helpers';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return(
            <div className="Pokedex">
                <ul>
                    {pokemonList.map(i => <li key={i.id}><Pokecard attr={i}/></li>)}
                </ul>
            </div>
        );
    }
}

export default Pokedex;