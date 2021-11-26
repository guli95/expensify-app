import { sortByAmount, sortByDates, setStartDate, setEndDate, setTextFilter, sortByDate } from "../../actions/filters";
import moment from 'moment'

test('should generate set start object',()=>{
    const date=moment()
    const result= setStartDate(date)
    expect(result).toEqual( {type:"SET_START_DATE",
    date:date})
    
})

test('should generate set end object',()=>{
    const date=moment()
    const result= setEndDate(date)
    expect(result).toEqual( {type:"SET_END_DATE",
    date:date})
    
})

test('should generate set text filters default object',()=>{
    const result = setTextFilter()
    expect(result).toEqual({
        type:"SET_TEXT_FILTER",
        text:''
    })
})
test('should generate set text filters object',()=>{
    const text='asd'
    const result= setTextFilter(text)
    expect(result).toEqual({
        type:"SET_TEXT_FILTER",
        text:text
    })
})
test('should generate  sort by amount object',()=>{
    const result= sortByAmount()
    expect(result).toEqual({
        type:"SORT_BY_AMOUNT"})
})
test('should generate sort by date object',()=>{
    const result= sortByDate()
    expect(result).toEqual({
        type:"SORT_BY_DATE"})
})