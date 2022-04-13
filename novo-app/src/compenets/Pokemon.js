import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { id, name, type, weight, image, alternativeText } = this.props.pokemon;


    return (
      <div className="pokemonCard" key={id}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weigth: {weight.toFixed(1)} kg</p>
        </div>
        <img src={image} alt={alternativeText} />
      </div>
    )
  }
}

export default Pokemon;