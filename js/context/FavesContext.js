import React, { createContext, Component } from 'react';
import {
  saveFavourite,
  getAllFavourites,
  removeFavourite
} from '../config/models';

const FavouritesContext = createContext();

class FavouritesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  componentDidMount = () => {
    this.getFaveIds();
  };

  getFaveIds = async () => {
    try {
      const allFaves = await getAllFavourites();

      const faveIds = allFaves.map(fave => fave[0]);
      this.setState({ faveIds: faveIds.filter(id => id !== 'uuid') });
    } catch (e) {
      console.log(e);
    }
  };

  saveFave = async faveid => {
    try {
      await saveFavourite(faveid);
      this.getFaveIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeFave = async faveid => {
    try {
      await removeFavourite(faveid);
      this.getFaveIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavouritesContext.Provider
        value={{
          ...this.state,
          removeFave: this.removeFave,
          saveFave: this.saveFave
        }}
      >
        {this.props.children}
      </FavouritesContext.Provider>
    );
  }
}

export { FavouritesProvider };
export default FavouritesContext;
