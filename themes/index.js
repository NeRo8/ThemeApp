import light from './modes/light';
import dark from './modes/dark';
import EStyleSheet from 'react-native-extended-stylesheet';

export const changeTheme = (themeName) => {
  switch (themeName) {
    case 'dark': {
      EStyleSheet.build(dark);
      break;
    }
    default:
      EStyleSheet.build(light);
  }
};
