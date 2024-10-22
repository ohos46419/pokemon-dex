import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: black;
  transition: transform 0.2s;
  box-shadow: 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const DetailButton = styled.button`
  margin-top: 8px;
`;

export default function PokemonCard({ pokemon, handleOnClick }) {
  const navigate = useNavigate();

  return (
    <Card>
      <div
        onClick={() => {
          handleOnClick(pokemon);
        }}
      >
        <div>{pokemon.korean_name}</div>

        <img src={pokemon.img_url} />

        <div>{pokemon.description}</div>
      </div>
      <DetailButton
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/pokemon-detail?id=${pokemon.id}`);
        }}
      >
        상세정보
      </DetailButton>
    </Card>
  );
}
