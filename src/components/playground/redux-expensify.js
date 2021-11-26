const { createStore, combineReducers } = require("redux")










    store.subscribe(()=>{
        const state=store.getState()
        const visibleExpenses= getVisibleExpenses(state.expenses, state.filters)
        console.log(visibleExpenses)})
  const expenseOne=  store.dispatch(addExpense({description:"rent", amount:2500, createdAt:1000}))
  const expenseTwo=  store.dispatch(addExpense({description:"coffee", amount:30, createdAt:-1000})) 
  const expenseThree=  store.dispatch(addExpense({description:"bike", amount:1000 ,createdAt:150})) 
  
//   store.dispatch(removeExpense({id:expenseTwo.expense.id}))
//   store.dispatch(editExpense(expenseThree.expense.id, {amount:550}))
//   store.dispatch(setTextFilter('coffee'))
  store.dispatch(sortByAmount())
  store.dispatch(sortByDate())
    //  store.dispatch(setStartDay(125))
    //  store.dispatch(setStartDay())  
    //  store.dispatch(setEndDay(1250))     


const demoState={
    expenses:[{
        id:'dadsa',
        description:'rent',
        note:'for january',
        amount: 54500,
        createdAt:0
    }],
        filters:{
            text:'rent',
            sortBy: 'amount',
            startDate:undefined,
            endDate:undefined
        }
    
}
