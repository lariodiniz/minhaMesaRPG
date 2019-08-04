import React from 'react';
import { shallow } from 'enzyme'


import { findByTestAtrr } from '../../common/utils/utilsTests'
import Index from './index'

const setUp =(props={}) => {
    let componet = shallow(<Index />);
    return componet 
};

describe('Index Component', () =>{

    let componet;
    beforeEach(() =>{
        componet = setUp();    
    })


    it('Should render a title', () =>{                
        let logo = findByTestAtrr(componet, 'title');
        expect(logo.length).toBe(1);

    });    

    it('Should render a subtitle', () =>{                
        let logo = findByTestAtrr(componet, 'subtitle');
        expect(logo.length).toBe(1);

    });   
});