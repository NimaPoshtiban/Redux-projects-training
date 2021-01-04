import {combineReducers} from 'redux'

const languagesReducer = () => {
  return [
    {
      title: 'Esperanto',
      users: '63000',
    },
    {
      title: 'Persian',
      users: '110000000',
    },
    {
      title: 'Polish',
      users: '45000000',
    },
    {
      title: 'Italian',
      users: '85000000',
    },
  ];
};
const selectedLanguageReducer=(selectedLanguage=null,action)=>{
  if(action.type==="LANGUAGE_SELECT"){
    return action.payload
  }
  return selectedLanguage;
}

export default combineReducers({
  languages:languagesReducer,
  selectedLanguage:selectedLanguageReducer
})