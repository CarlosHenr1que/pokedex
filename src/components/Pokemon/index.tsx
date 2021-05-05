import React from 'react';

import {Container, Content, Image, Name} from './styles';

export interface PokemonType {
  id: string;
  name: string;
  image_url: string;
}

export interface PokemonProps {
  pokemon: PokemonType;
}

const Pokemon: React.FC<PokemonProps> = ({pokemon: {name, image_url}}) => {
  return (
    <Container>
      <Content>
        <Name>{name}</Name>
        <Image source={{uri: image_url}} />
      </Content>
    </Container>
  );
};

export default Pokemon;
