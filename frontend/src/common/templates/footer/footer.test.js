import React from 'react';
import { shallow } from 'enzyme'


import { findByTestAtrr } from '../../../common/utils/utilsTests'
import Footer from './footer'

const setUp =(props={}) => {
    let componet = shallow(<Footer />);
    return componet 
};

describe('Footer Component', () =>{

    let componet;
    beforeEach(() =>{
        componet = setUp();    
    })

    it('Should render without errors', () =>{        
        let hero_head = findByTestAtrr(componet, 'footer');        
        expect(hero_head.length).toBe(1);

    });


    it('Should render a home github', () =>{                
        let logo = findByTestAtrr(componet, 'link_github');
        expect(logo.length).toBe(1);

    });  

    it('Should render a stackoverflow link', () =>{                
        let logo = findByTestAtrr(componet, 'link_stackoverflow');
        expect(logo.length).toBe(1);

    });  

    it('Should render a medium link', () =>{                
        let logo = findByTestAtrr(componet, 'link_medium');
        expect(logo.length).toBe(1);

    });  
    
    it('Should render a twitter link', () =>{                
        let logo = findByTestAtrr(componet, 'link_twitter');
        expect(logo.length).toBe(1);

    });      
});