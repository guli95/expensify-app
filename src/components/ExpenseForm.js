import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            description:props.expense? props.expense.description:'',
            note:props.expense? props.expense.note:'',
            amount:props.expense? (props.expense.amount / 100).toString():'',
            createdAt:props.expense? moment(props.expense.createdAt):moment(),
            focused:false,
            error:'',
           
            
            
        }
    }
    state={
        description:'',
        note:'',
        amount:'',
        createdAt:moment(),
        focused:false,
        error:''
        
    }

    onDescriptionChange=(e)=>{
        this.setState({
            description:e.target.value
        })
    }
    onNoteChange=(e)=>{
        this.setState({
            note:e.target.value
        })
    }
    onAmountChange=(e)=>{
        const amount= e.target.value
            if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(()=>({
            amount
        }))
    }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
        this.setState(()=>({createdAt}))}
        }
    onFocusChange=({focused})=>(
        this.setState(()=>({focused}))
    )
    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState({error:true})
        }
        else{this.setState({error:false})
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return(
            <div>
            {this.state.error&& <p>You have to provide description and amount</p>}
            <form onSubmit={this.onSubmit}>
                <input
                type="text"
                placeholder='description'
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input
                type="text"
                placeholder='amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
               <SingleDatePicker
               date={this.state.createdAt}
               onDateChange={this.onDateChange}
               focused={this.state.focused}
               onFocusChange={this.onFocusChange}
               numberOfMonths={1}
               isOutsideRange={()=> false}/>
                <textarea 
                placeholder="add note for your expense(optional)"
                value={this.state.note}
                onChange={this.onNoteChange}></textarea>
                <button>Add Expense</button>
            </form>
            </div>
        )
    }
}