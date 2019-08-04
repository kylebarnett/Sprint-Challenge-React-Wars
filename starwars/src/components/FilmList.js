import React from 'react';
import Films from './Films';
import styled from 'styled-components'

// const FilmContainer = styled.div`
//   margin: 0 auto;
// `;

export default function FilmList(props) {
  return (
    <div>
      {props.films.map((film, index) => (
        <Films film={film} key={index} />
      ))}
    </div>
  )
}