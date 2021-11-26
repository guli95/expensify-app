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



const expenseOne=  store.dispatch(addExpense({description:"water bill", amount:2500, createdAt:1000}))
const expenseTwo=  store.dispatch(addExpense({description:"gas bill", amount:30, createdAt:-1000})) 
const expenseThree=  store.dispatch(addExpense({description:"rent", amount:10, createdAt:1200})) 
// store.dispatch(setTextFilter('bill'))
const visibleExpenses=getVisibleExpense(store.getState().expenses, store.getState().filters)
 

// setTimeout(()=>{
//   store.dispatch(setTextFilter('water'))
// },5000)

  const jsx=(
  <Provider store={store}>
      <AppRouter/>
  </Provider> 
  )
  ReactDOM.render(jsx, document.getElementById('app'));


