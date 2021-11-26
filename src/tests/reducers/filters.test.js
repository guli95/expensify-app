import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up default filters value',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'})

    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sort by to amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date',()=>{
    const defaultState={
        text:'',
        sortBy: 'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state = filtersReducer(undefined,{type:'SORT_BY_DATE'})

    expect(state.sortBy).toBe('date')
})

test('should set start date ',()=>{
    const date=moment().startOf('month')
    const state = filtersReducer(undefined,{type:'SET_START_DAY',
startDate:date})

    expect(state.startDate).toEqual(date)
})

test('should set end date ',()=>{
    const date=moment().endOf('month')
    const state = filtersReducer(undefined,{type:'SET_END_DAY',
endDate:date})

    expect(state.endDate).toEqual(date)
})

test('should set text filters ',()=>{
    const text='siuruburu'
    const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER',
text})

    expect(state.text).toBe(text)
})