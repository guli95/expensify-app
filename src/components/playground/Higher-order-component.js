import React from 'react';
import ReactDOM from 'react-dom';


const Info=(props)=>(
    <div>
    <h1>Info</h1>
    <p>this is info:{props.info}</p>
    </div>
)

const requireAuthentication=(WrappedComponent)=>{
   return (props)=>(
      
       <div>
       {props.isAuthenticated && <p>This is authorised info</p>}
    <WrappedComponent info="lorem ipsum sripsum"/>
    </div>
   ) 
}

const AuthInfo=requireAuthentication(Info)
console.log(AuthInfo)
ReactDOM.render(<AuthInfo isAuthenticated={true}/>, document.getElementById('app'))
