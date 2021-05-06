import React, {useEffect, useMemo, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Tts from 'react-native-tts';
import Header from '../../components/Header';
import PokedexScreen from '../../components/PokedexScreen';
import {PokemonType} from '../../components/Pokemon';

import api from '../../services/api';

import {Container} from './styles';
import TextToSpeechUtil from '../../utils/TextToSpeeachUtil';

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
  const textToSpeach = useMemo(() => {
    return new TextToSpeechUtil(Tts);
  }, []);

  const getPokemonDetails = async (id: string) => {
    try {
      const {data} = await api.get(`pokemon/${id}`);

      setPokemonDetail(data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ops, something went wrong',
        text2: 'Could not load pokemon detail',
      });
    }
  };

  useEffect(() => {
    if (Object.entries(pokemonDetail).length > 0) {
      textToSpeach.isReady().then(() => {
        textToSpeach.speak(routeParams.pokemon.name);
      });
    }
  }, [pokemonDetail, routeParams.pokemon.name, textToSpeach]);

  useEffect(() => {
    return () => {
      textToSpeach.stop();
    };
  }, [textToSpeach]);

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
