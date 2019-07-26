import React from 'react';
import { shallow } from 'enzyme'


import { findByTestAtrr } from '../../../common/utils/utilsTests'
import Header from './header'

const setUp =(props={}) => {
    let componet = shallow(<Header />);
    return componet 
};

describe('Header Component', () =>{

    let componet;
    beforeEach(() =>{
        componet = setUp();    
    })

    it('Should render without errors', () =>{        
        let hero_head = findByTestAtrr(componet, 'header');        
        expect(hero_head.length).toBe(1);

    });

    it('Should render a logo', () =>{                
        let logo = findByTestAtrr(componet, 'header');
        expect(logo.length).toBe(1);

    });    

    it('Should render a home link', () =>{                
        let logo = findByTestAtrr(componet, 'home_link');
        expect(logo.length).toBe(1);

    });  

    it('Should render a login link', () =>{                
        let logo = findByTestAtrr(componet, 'login_link');
        expect(logo.length).toBe(1);

    });  
});