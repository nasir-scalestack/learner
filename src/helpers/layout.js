import { Dimensions } from 'react-native';

const vw = percentageWidth =>
  Dimensions.get('window').width * (percentageWidth / 100);

const vh = percentageHeight =>
  Dimensions.get('window').height * (percentageHeight / 100);

export default { vw, vh };
