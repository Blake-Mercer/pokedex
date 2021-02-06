import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5rem;
  height: 5rem;
  display: none;
`;
export default class PokeCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokeIndex: '',
    pokemonImg: null,
    loading: true,
    error: false,
  };
  componentDidMount() {
    const { name, url } = this.props;
    const pokeIndex = url.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;
    this.setState({ pokeIndex, name, imageUrl });
  }
  render() {
    return (
      <div className='col-md-3 col-sm-3 col-6 mb-5'>
        <div className='card rounded-3 border-info'>
          <div className='card-header'>{this.state.pokeIndex}</div>
          {this.state.loading ? <div className='loader mx-auto'></div> : null}
          <Sprite
            className='card-img-top rounded mx-auto mt-2'
            src={this.state.imageUrl}
            onLoad={() => this.setState({ loading: false })}
            onError={() => this.setState({ error: true })}
            style={
              this.state.error
                ? { display: 'none' }
                : this.state.loading
                ? null
                : { display: 'block' }
            }></Sprite>
          {this.state.error ? (
            <h6 className='mx-auto'>
              <span className='badge badge-danger mt-2'>Error Bro!</span>
            </h6>
          ) : null}
          <div className='card-body mx-auto'>
            <div className='card-title'>
              {this.state.name
                .toLowerCase()
                .split(' ')
                .map(
                  (letter) =>
                    letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(' ')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
