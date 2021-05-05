import {PokemonType} from '../components/Pokemon/index';

const getPokemonId = (url: string): string => {
  return url.split('/')[6];
};

export const mapToPokemontype = (data: []): PokemonType[] => {
  const pokemonList: PokemonType[] = data.map(
    (pokemon: {name: string; url: string}) => {
      const id = getPokemonId(pokemon.url);

      return {
        id,
        name: pokemon.name,
        image_url: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      };
    },
  );

  return pokemonList;
};
