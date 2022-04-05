import React, { Component } from "react";

class Image extends Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// Qual o nome do componente declarado acima?
// R: Esse componente se chama "Image"

// Chame o componente Image, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada