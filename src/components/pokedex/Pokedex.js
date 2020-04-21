import React, {Component} from 'react';
import Pokecard from '../pokecard/Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        return(
            <div className="Pokedex">
                <Pokecard id="4" name="Charmander" type="fire" exp="62"/>
            </div>
        );
    }
}

export default Pokedex;