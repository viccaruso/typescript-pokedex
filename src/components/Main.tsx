import React from 'react';
import PokemonCard from './PokemonCard';
import Select from './Select';

type Props = {};

export default function Main({}: Props) {
  return (
    <div>
      <Dropdown />
      <PokemonCard />
    </div>
  );
}
