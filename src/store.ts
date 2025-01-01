// src/store/store.js  
import { createStore } from 'redux';  

const initialState = {  
  theme: localStorage.getItem('theme') || 'light', // Default theme  
};  

const themeReducer = (state = initialState, action:any) => {  
  switch (action.type) {  
    case 'SET_THEME':  
      localStorage.setItem('theme', action.payload); // Save to local storage  
      return {  
        ...state,  
        theme: action.payload,  
      };  
    default:  
      return state;  
  }  
};  

const store = createStore(themeReducer);  

export default store;

export const setTheme = (theme:any) => ({  
    type: 'SET_THEME',  
    payload: theme,  
  });  


