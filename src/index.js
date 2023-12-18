import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import difficultyReducer from "./features/difficulty/difficultySlice";
import questionsReducer from "./features/questions/questionsSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
      difficulty: difficultyReducer,
      questions: questionsReducer
  }
})

root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
  </Provider>
  </React.StrictMode>
);

