import Header from "../../components/Header";
import React from 'react';
import { shallow } from "enzyme";


test('should render correctly',()=>{
    const wrapper= shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})