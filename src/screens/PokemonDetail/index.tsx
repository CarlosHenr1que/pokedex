import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import Header from '../../components/Header';
import PokedexScreen from '../../components/PokedexScreen';
import {PokemonType} from '../../components/Pokemon';

import api from '../../services/api';

import {Container} from './styles';

interface Params {
  pokemon: PokemonType;
}

interface StatType {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetail {
  stats: StatType[];
}

const PokemonDetail: React.FC = () => {
  const [pokemonDetail, setPokemonDetail] = useState({} as PokemonDetail);
  const route = useRoute();
  const routeParams = route.params as Params;

  const getPokemonDetails = async (id: string) => {
    try {
      const {data} = await api.get(`pokemon/${id}`);

      setPokemonDetail(data);
    } catch (error) {
      Alert.alert('Error', 'Could not load detail');
    }
  };

  useEffect(() => {
    getPokemonDetails(routeParams.pokemon.id);
  }, [routeParams.pokemon.id]);

  return (
    <Container>
      <Header />
      <PokedexScreen info={routeParams.pokemon} detail={pokemonDetail} />
    </Container>
  );
};

export default PokemonDetail;
