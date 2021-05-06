import React from 'react';

import {Container, Content, Image, Name} from './styles';

export interface PokemonType {
  id: string;
  name: string;
  image_url: string;
}

export interface PokemonProps {
  pokemon: PokemonType;
  onPress: (pokemon: PokemonType) => void;
}

const Pokemon: React.FC<PokemonProps> = ({
  pokemon: {id, name, image_url},
  onPress,
}) => {
  return (
    <Container onPress={() => onPress({id, image_url, name})}>
      <Content>
        <Name>{name}</Name>
        <Image source={{uri: image_url}} />
      </Content>
    </Container>
  );
};

export default Pokemon;
