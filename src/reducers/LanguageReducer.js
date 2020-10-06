import { languages } from '../locales/languages';

const INITIAL_STATE = languages.english;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LANG_DATA':
      return action.payload;
    default: 
     return state;
  }
};