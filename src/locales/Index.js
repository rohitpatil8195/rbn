import I18n, {getLanguages} from 'react-native-i18n';

import it from './it.json';
import en from './en.json';
import fr from './fr.json';
I18n.fallbacks = true;

I18n.translations = {
  en,
  it,
  fr,
};

getLanguages()
  .then((languages) => {
    // I18nManager.forceRTL(true);
    // console.log('getLanguages', languages); // ['en-US', 'en']
  })
  .catch((error) => {
    // console.log('getLanguages error : ', error);
  });
export default I18n;