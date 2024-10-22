import styled from "styled-components";
import { useState, createContext } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const PokemonContext = createContext();

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  console.log("selectedPokemon", selectedPokemon);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리까지 선택 가능합니다");
    } else if (selectedPokemon.includes(pokemon)) {
      alert("이미 선택된 포켓몬입니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    const newPokemonList = selectedPokemon.filter((p) => p.id !== pokemon.id);
    setSelectedPokemon(newPokemonList);
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        removePokemon,
        addPokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      <DexContainer>
        <Dashboard />
        <PokemonList />
      </DexContainer>
    </PokemonContext.Provider>
  );
}
