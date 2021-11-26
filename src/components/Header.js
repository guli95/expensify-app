import React from 'react';
import {NavLink} from 'react-router-dom'

const Header =()=>(
    <header>
      <h1>Expensify</h1>
      <NavLink to='/' activeClassName='isActive' exact>Go Home </NavLink>
      <NavLink to='/edit' activeClassName='isActive'>Go Edit </NavLink>
      <NavLink to='/help' activeClassName='isActive'>Go Help </NavLink>
      <NavLink to='/create' activeClassName='isActive'>Go Add </NavLink>
    </header>
  )

export default Header