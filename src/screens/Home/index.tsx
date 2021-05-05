/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {RefreshControl, Alert, FlatList} from 'react-native';
import {Container} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Pokemon, {PokemonType} from '../../components/Pokemon';
import {mapToPokemontype} from '../../utils';

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentOffSet, setCurrentOffSet] = useState<number>(0);
  const LIMIT = 20;

  const getPokemons = async () => {
    try {
      setLoading(true);
      const {data} = await api.get(
        `pokemon/?limit=${LIMIT}&offset=${currentOffSet}`,
      );
      setPokemonList([...pokemonList, ...mapToPokemontype(data.results)]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Could not load pokemon list');
    }
  };

  const handleLoadMore = () => {
    setCurrentOffSet(currentOffSet + LIMIT);
  };

  useEffect(() => {
    getPokemons();
  }, [currentOffSet]);

  return (
    <Container>
      <Header />
      <FlatList
        data={pokemonList}
        style={{marginTop: 30}}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        refreshControl={<RefreshControl refreshing={loading} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Pokemon pokemon={item} />}
      />
    </Container>
  );
};

export default Home;
