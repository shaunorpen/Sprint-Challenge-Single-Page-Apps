import React from "react";
import styled from 'styled-components';

const Character = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  padding: 1rem;
  margin: 0.4rem 0.4rem;
  flex-basis: 10rem;
  flex-shrink: 1;
  flex-grow: 1;
  color: #472523;

  h3 {
    font-size: 1rem;
    margin-top: 0;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;

export default function CharacterCard(props) {
  const {props: {id, name, species, gender, status, type, image} } = props;
    return (
      <Character key={id}>
        <h3>{name}</h3>
        <div>
          <img src={image} alt={name}/>
        </div>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status === 'unknown' ? 'Unknown' : status}</p>
        <p>Type: {type ? type : 'Not defined'}</p>
      </Character>
  );
}
