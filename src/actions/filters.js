//Set Text Filter
export const setTextFilter=(text='')=>({
    type:"SET_TEXT_FILTER",
    text
})
//Sort by amount
export const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT"}
)

//Sort by date
export const sortByDate=()=>({
    type:"SORT_BY_DATE"}
)
//set start day
export const setStartDate =(date)=>(
    {type:"SET_START_DATE",
     date}
)
//set end day
export const setEndDate =(date)=>(
    {type:"SET_END_DATE",
     date}
)