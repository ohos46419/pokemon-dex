import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../pages/dex";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ff0000;
`;

const Message = styled.p`
  color: black;
`;

const DashboardContent = styled.div`
  display: flex;
  gap: 8px;
`;

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <Title>대시보드</Title>
      {selectedPokemon.length === 0 ? (
        <Message>선택된 포켓몬이 없습니다.</Message>
      ) : (
        <DashboardContent>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              handleOnClick={removePokemon}
            />
          ))}
        </DashboardContent>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
