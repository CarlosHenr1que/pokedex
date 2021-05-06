import React from 'react';
import {FlatList} from 'react-native';
import {PokemonDetail} from '../../screens/PokemonDetail';
import {PokemonType} from '../Pokemon';
import Stat from '../Stat';

import {Container, Content, Image, Name} from './styles';

interface PokedexScreenProps {
  info: PokemonType;
  detail: PokemonDetail;
}

const PokedexScreen: React.FC<PokedexScreenProps> = ({
  info: {name, image_url},
  detail: {stats},
}) => {
  return (
    <Container>
      <Content>
        <Name>{name}</Name>

        <FlatList
          data={stats}
          keyExtractor={item => item.stat.name}
          renderItem={({item}) => (
            <Stat stat={item} step={item.base_stat} steps={100} height={10} />
          )}
        />
      </Content>
      <Image source={{uri: image_url}} />
    </Container>
  );
};

export default PokedexScreen;
