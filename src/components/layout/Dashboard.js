import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from '../pokemon/PokeCard';

export default function Dashboard() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(initialURL);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setPokemonData(response.data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await axios.get(nextUrl);
    setNextUrl(data.data.next);
    setPrevUrl(data.data.previous);
    setPokemonData(data.data.results);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await axios.get(prevUrl);
    setNextUrl(data.data.next);
    setPrevUrl(data.data.previous);
    setPokemonData(data.data.results);
    setLoading(false);
  };

  let controls = (
    <div className='btn'>
      <button onClick={next}>Next</button>
    </div>
  );
  if (prevUrl != null) {
    controls = (
      <div className='btn'>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    );
  }

  return (
    <div className='row'>
      <div className='col'>
        {controls}
        {loading ? (
          <h1>Loading Pokemon</h1>
        ) : (
          <div className='row'>
            {pokemonData.map((pokemon) => {
              return (
                <PokeCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
