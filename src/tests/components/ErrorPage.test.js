import ErrorPage from '../../components/ErrorPage';
import React from 'react';
import { shallow } from "enzyme";


test('should render correctly',()=>{
    const wrapper= shallow(<ErrorPage/>)
    expect(wrapper).toMatchSnapshot()
})