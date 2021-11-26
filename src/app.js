import React from 'react';
import ReactDOM  from 'react-dom';
import AppRouter from './routers/appRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import {addExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses'


const store = configureStore();


  const jsx=(
  <Provider store={store}>
      <AppRouter/>
  </Provider> 
  )
  ReactDOM.render(jsx, document.getElementById('app'));


