/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {RefreshControl, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {Container} from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Pokemon, {PokemonType} from '../../components/Pokemon';
import {mapToPokemontype} from '../../utils';
import NotFound from '../../components/NotFound';

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentOffSet, setCurrentOffSet] = useState<number>(0);
  const navigation = useNavigation();

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
      Toast.show({
        type: 'error',
        text1: 'Ops, something went wrong',
        text2: 'Could not load pokemon list',
      });
    }
  };

  const handleLoadMore = () => {
    setCurrentOffSet(currentOffSet + LIMIT);
  };

  const onPokemonPress = (pokemon: PokemonType) => {
    navigation.navigate('PokemonDetail', {pokemon});
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
        ListEmptyComponent={() => (
          <NotFound error="No Pokemon found" onPress={getPokemons} />
        )}
        refreshControl={<RefreshControl refreshing={loading} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pokemon onPress={onPokemonPress} pokemon={item} />
        )}
      />
    </Container>
  );
};

export default Home;
