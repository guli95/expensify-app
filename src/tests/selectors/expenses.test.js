import moment from 'moment'
import selectExpense from '../../selectors/expenses'

const expenses=[{
    id:'1',
    description:'gum',
    note:"sticky",
    amount:100,
    createdAt:0

},{
    id:'2',
    description:'red',
    note:"s",
    amount:222,
    createdAt:moment(0).add(4,'days').valueOf()

},{
    id:'3',
    description:'bable',
    note:"",
    amount:50,
    createdAt:moment(0).subtract(4, 'days').valueOf()

}]
test("should filter by text value",()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('should filter by start Date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[0],expenses[1]])
})

test('should filter by end Date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[0],expenses[2]])
})

test('should sort by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]])
})