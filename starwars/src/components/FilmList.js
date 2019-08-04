import React from 'react';
import Films from './Films';

export default function FilmList(props) {
  return (
    <div>
      {props.films.map((film, index) => (
        <Films film={film} key={index} />
      ))}
    </div>
  )
}