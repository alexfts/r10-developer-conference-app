import { AsyncStorage } from 'react-native';

export const saveFavourite = async faveId => {
  try {
    await AsyncStorage.setItem(
      faveId,
      JSON.stringify({
        id: faveId,
        faveOn: new Date()
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const getAllFavourites = async () => {
  try {
    const faveIds = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(faveIds);
  } catch (e) {
    console.log(e);
  }
};

export const removeFavourite = async faveid => {
  try {
    await AsyncStorage.removeItem(faveid);
  } catch (e) {
    console.log(e);
  }
};
