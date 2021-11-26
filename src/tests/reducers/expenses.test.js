import expenseReducer from '../../reducers/expenses'
import { v4 as uuidv4 } from 'uuid'

const state=[{id:1,
    description:'aa',
    note:'ss',
    amount:200,
    createdAt:200
}, {
    id:uuidv4(),
    description:'bb',
    note:'ss',
    amount:300,
    createdAt:200
},{
    id:uuidv4(),
    description:'cc',
    note:'ss',
    amount:400,
    createdAt:200
}]
const expense4 ={
    id:uuidv4(),
    description:'dd',
    note:'ss',
    amount:500,
    createdAt:200
}
test('should set up default state',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should add expense to state',()=>{
   
    const newState=expenseReducer(state,{type:'ADD_EXPENSE',expense:expense4})
    expect(newState).toEqual([...state,expense4])
})

test('should remove expense from state',()=>{
   
    const newState=expenseReducer(state,{type:'REMOVE_EXPENSE',id:1})
    expect(newState).toEqual([state[1],state[2]])
})

test('should edit expense from state',()=>{
   const updates={
       describe:'lala',
       amount:20
   }
    const newState=expenseReducer(state,{type:'EDIT_EXPENSE',id:1, updates})
    expect(newState).toEqual([{...state[0], ...updates},state[1],state[2]])
})