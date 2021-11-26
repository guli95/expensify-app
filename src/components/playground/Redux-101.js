import {createStore} from 'redux';

const incrementCount = ({incrementBy= 1}={})=>({
    type:'INCREMENT',
    incrementBy
})

const decrementCount=({decrementBy=1}={})=>(
    {type:'DECREMENT',
     decrementBy   }
)

const setCount=({set=1}={})=>({
    type:"SET",
    set
})
const resetCount=()=>({
    type:"RESET"
})

const store= createStore((state={count:0}, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count:state.count + action.incrementBy};
        case "DECREMENT": 
            return {count:state.count - action.decrementBy};
        case "RESET": return {count:0};
        case "SET" : return{count:action.set}

        default: return state
    }})
    


    store.subscribe(()=>{
        console.log(store.getState())
    })

store.dispatch(incrementCount({incrementBy:5})
)
store.dispatch(decrementCount({decrementBy:100})
)

store.dispatch(resetCount())

store.dispatch(setCount({set:150}))
store.dispatch(decrementCount()
)

