import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const FilmContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: grey;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 50%;
  height: auto;
  border: 1px solid black;
`;

export default function Films(props) {
  return (
    <FilmContainer>
      <Header as="h1">Film: {props.film.title}</Header>
      <Header as="h3">Director: {props.film.director}</Header>
      <Header as="h5">Release Date: {props.film.release_date}</Header>
    </FilmContainer>
  )
}