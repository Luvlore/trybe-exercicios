// src/App.js
import React, { Component } from 'react';

class Album extends Component {
  render() {
    // variáveis desestruturadas da props
    const { image, title, releaseDate, others } = this.props.Album;

    // Retorno do que será renderizado
    return (
        <section>
          <img src={ image } alt={ title } />
          <h2>{ title }</h2>
          <p>Lançamento: { releaseDate.year }</p>
          <p>Gravadora: { others.recordCompany }</p>
          <p>Formatos: { others.formats }</p>
        </section>
    );
  }
}

export default Album;
