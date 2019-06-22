import React from 'react';
import { shallow } from 'enzyme'

import { findByTestAtrr, checkProps } from '../../utils/utilsTests'

import Button from './button'

const setUp =(props={}) => {
    let componet = shallow(<Button />);
    return componet 
};

describe('Button Component', () =>{

    let componet;
    beforeEach(() =>{
        componet = setUp();    
    })

    it('Should render without errors', () =>{        
        let hero_head = findByTestAtrr(componet, 'button');        
        expect(hero_head.length).toBe(1);

    });

    describe('Checking PropTypes', () =>{

        it('Should not throw a warning', () => {
            let func = () => {}
            let expectedProps = {
                classes: "teste",
                click: func,
                type: 'teste',
                buttonText: 'Teste' 
            }

            let propsErr = checkProps(Button, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

      


});