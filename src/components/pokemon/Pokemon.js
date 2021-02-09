import React, { Component } from 'react';
import axios from 'axios';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

export default class Pokemon extends Component {
  state = {
    name: '',
    pokeIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
    },
    height: '',
    weight: '',
    eggGroup: '',
    abilities: '',
    genderRatioMale: '',
    genderRatioFemale: '',
    evs: '',
    hatchSteps: '',
  };

  async componentDidMount() {
    const { pokeIndex } = this.props.match.params;

    // Urls for pokemon info
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeIndex}/`;

    // Get pokemon info
    const pokeResponse = await axios.get(pokemonUrl);

    const name = pokeResponse.data.name;
    const imageUrl = pokeResponse.data.sprites.front_default;

    let { hp, attack, defense, speed } = '';

    pokeResponse.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        default:
          return stat;
      }
    });
    // convert from decimeters to feet... The + 0.0001 * 100) / 100 is for rounding to 2 decimal places.
    const height =
      Math.round((pokeResponse.data.height * 0.328084 + 0.0001) * 100) / 100;

    // converts to pounts
    const weight =
      Math.round((pokeResponse.data.weight * 0.220462 + 0.0001) * 100) / 100;

    const types = pokeResponse.data.types.map((type) => type.type.name);

    const abilities = pokeResponse.data.abilities
      .map((ability) => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
          .join(' ');
      })
      .join(', ');

    const evs = pokeResponse.data.stats
      .filter((stat) => {
        if (stat.effort > 0) return true;
        return false;
      })
      .map((stat) => {
        return `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split('-')
          .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
          .join(' ')}`;
      })
      .join(', ');

    // Get pokemon description, catch rate, egggroups, gender ratio, hatch steps.

    await axios.get(pokemonSpeciesUrl).then((res) => {
      let description = '';
      res.data.flavor_text_entries.some((flavor) => {
        if (flavor.language.name === 'en') {
          return (description = flavor.flavor_text);
        }
      });

      const femaleRate = res.data['gender_rate'];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data['capture_rate']);

      const eggGroups = res.data['egg_groups']
        .map((group) => {
          return group.name
            .toLowerCase()
            .split('-')
            .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
            .join(' ');
        })
        .join(', ');

      const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

      this.setState({
        description,
        genderRatioMale,
        genderRatioFemale,
        catchRate,
        eggGroups,
        hatchSteps,
      });
    });

    this.setState({
      imageUrl,
      pokeIndex,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
      },
      height,
      weight,
      abilities,
      evs,
    });
  }

  render() {
    const statsArray = [];
    for (let key in this.state.stats) {
      statsArray.push({
        id: key,
        config: this.state.stats[key],
      });
    }

    const progressBar = statsArray.map((val) => (
      <div key={val.id} className='row align-items-center'>
        <div className='col-12 col-md-3'>
          {val.id
            .toLowerCase()
            .split('special')
            .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
            .join(' ')}
        </div>
        <div className='col-12 col-md-9'>
          <div className='progress'>
            <div
              className='progress-bar'
              role='progressbar'
              style={{ width: `${val.config}%` }}
              aria-valuenow='25'
              aria-valuemax='100'
              aria-valuemin='0'>
              <small>{val.config}</small>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className='col'>
        <div className='card'>
          <div className='card-header'>
            <div className='row'>
              <div className='col-5'>
                <h5>{this.state.pokeIndex}</h5>
              </div>
              <div className='col-7'>
                <div className='float-right'>
                  {this.state.types.map((type) => {
                    return (
                      <span
                        key={type}
                        className='badge badge-primary badge-pill mr-1'
                        style={{
                          backgroundColor: `#${TYPE_COLORS[type]}`,
                          color: 'white',
                        }}>
                        {type
                          .toLowerCase()
                          .split('-')
                          .map(
                            (val) =>
                              val.charAt(0).toUpperCase() + val.substring(1)
                          )
                          .join(' ')}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <div className='row align-items-center'>
              <div className='col-sm-3'>
                <img
                  src={this.state.imageUrl}
                  className='card-img-top rounded mx-auto mt-2'
                  alt=''
                />
              </div>
              <div className='col-sm-9'>
                <h4 className='mx-auto'>
                  {this.state.name
                    .toLowerCase()
                    .split('-')
                    .map(
                      (val) => val.charAt(0).toUpperCase() + val.substring(1)
                    )
                    .join(' ')}
                </h4>
                {progressBar}
              </div>
              <div className='row mt-1'>
                <div className='col'>
                  <p className='p-2'>{this.state.description}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='card-body'>
            <h5 className='card-title text-center'>Profile</h5>
            <div className='row'>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='col-6'>
                    <h6 className='float-right'>Height:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.height} ft.</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-right'>Weight:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.weight} lbs</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-right'>Catch Rate:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.catchRate}%</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-right'>Gender Ratio:</h6>
                  </div>
                  <div className='col-6'>
                    <div className='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        style={{
                          width: `${this.state.genderRatioFemale}%`,
                          backgroundColor: '#c2185b',
                        }}
                        aria-valuenow='15'
                        aria-valuemin='0'
                        aria-valuemax='100'>
                        <small>{this.state.genderRatioFemale}</small>
                      </div>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        style={{
                          width: `${this.state.genderRatioMale}%`,
                          backgroundColor: '#1976d2',
                        }}
                        aria-valuenow='30'
                        aria-valuemin='0'
                        aria-valuemax='100'>
                        <small>{this.state.genderRatioMale}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='col-6'>
                    <h6 className='float-right'>Egg Groups:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.eggGroups} </h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-right'>Hatch Steps:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.hatchSteps}</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-right'>Abilities:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.abilities}</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-right'>EVs:</h6>
                  </div>
                  <div className='col-6'>
                    <h6 className='float-left'>{this.state.evs}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='card-footer text-muted'>
            Sourced From{' '}
            <a
              href='https://pokeapi.co/'
              rel='noreferrer'
              target='_blank'
              className='card-link'>
              PokeAPI.co
            </a>
          </div>
        </div>
      </div>
    );
  }
}
