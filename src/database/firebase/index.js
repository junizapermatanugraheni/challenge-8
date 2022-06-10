import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

export const reference = () => firebase
  .app()
  .database('https://pokemonapp-2e19f-default-rtdb.asia-southeast1.firebasedatabase.app/')
