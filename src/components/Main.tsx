import React from 'react';
import PokemonCard from './PokemonCard';
import Dropdown from './Dropdown';

const testObj = {
  _id: '5ff4fb7cd89993a89cc6549a',
  pokemon: 'seel',
  id: 94,
  species_id: 86,
  height: 11,
  weight: 900,
  base_experience: 65,
  type_1: 'water',
  type_2: 'NA',
  attack: 45,
  defense: 55,
  hp: 65,
  special_attack: 45,
  special_defense: 70,
  speed: 45,
  ability_1: 'thick-fat',
  ability_2: 'hydration',
  ability_hidden: 'ice-body',
  color_1: '#6890F0',
  color_2: 'NA',
  color_f: 'NA',
  egg_group_1: 'water1',
  egg_group_2: 'ground',
  url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
  generation_id: 1,
  evolves_from_species_id: 'NA',
  evolution_chain_id: 37,
  shape_id: 3,
  shape: 'fish',
  pokebase: 'seel',
  pokedex: 'http://www.pokemon.com/us/pokedex/seel',
};

export default function Main() {
  return (
    <div>
      <Dropdown options={['option1', 'option2']} />
      <PokemonCard {...testObj} />
    </div>
  );
}
