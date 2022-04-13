// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokedex from './compenets/Pokedex.js'

class App extends React.Component {
  render() {
    const pokemons = [
      {
        id: 1,
        name: 'Pikachu',
        type: 'Elétrico',
        weight: 13.2,
        image: 'https://66.media.tumblr.com/927365f0bbdd1f3d2f852bac8759f89b/tumblr_mh8a7wx1WG1rfjowdo1_r2_500.gif',
        alternativeText: 'Dazai',
      },
      {
        id: 2,
        name: 'Buizel',
        type: 'Water',
        weight: 29.5,
        image: 'https://c.tenor.com/FfHjNfODLkgAAAAi/buizel-pokemon.gif',
        alternativeText: 'Dazai',
      },
      {
        id: 3,
        name: 'Growlithe',
        type: 'Fire',
        weight: 19,
        image: 'https://31.media.tumblr.com/9ea917dd47a9fd2ad0a3638179d6cfc6/tumblr_mkuqqsTeWn1r67h3uo1_500.gif',
        alternativeText: 'Dazai',
      },
      {
        id: 4,
        name: 'Kadrabra',
        type: 'Psychic',
        weight: 56.5,
        image: 'https://i.gifer.com/Z7i4.gif',
        alternativeText: 'Dazai',
      },
      {
        id: 5,
        name: 'Charmander',
        type: 'Fire',
        weight: 8.5,
        image: 'https://thumbs.gfycat.com/RespectfulHonestAxolotl-max-1mb.gif',
        alternativeText: 'Dazai',
      },
    ]
    return (
      <>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </>
    );
  }
}

export default App;