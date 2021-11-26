import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('add expense work()',()=>{
    const result = removeExpense({id:'sas'})
    expect(result).toEqual({
        type:"REMOVE_EXPENSE",
        id:'sas'
    })
})

test('edit expense work',()=>{
    const result= editExpense('id', 'updates')
    expect(result).toEqual({type:"EDIT_EXPENSE",
    id:'id',
    updates:"updates"})
})

test('should set up add expense action object with provided value',()=>{
    const action= addExpense({description:'s',
    note:'a',
    amount:0,
    createdAt:0
    })
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            description:'s',
            note:'a',
            amount:0,
            createdAt:0
    }})
})
test('should set up add expense action with a default object',()=>{
    const defaultObject={description:'',
    note:'',
    amount:0,
    createdAt:0}
    const action= addExpense()
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{...defaultObject,id:expect.any(String)}})

})