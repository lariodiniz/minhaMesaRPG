import React from 'react';
import { shallow } from 'enzyme'

import { findByTestAtrr } from '../utils/utilsTests'
import { checkProps } from '../utils/utilsTests'

import Input from './input'

const setUp =(props={}) => {
    let componet = shallow(<Input {...props} />);
    return componet 
};

describe('Input Component', () =>{

    describe('Checking PropTypes', () =>{

        it('Should not throw a warning', () => {
            let expectedProps = {
                placeholder: "teste",
                readOnly: true,
                type: 'teste', 
            }

            let propsErr = checkProps(Input, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('Have props', () =>{
        let component;
        beforeEach(() =>{
            let props = {
                placeholder: "Nome",
                readOnly: true,
                type: 'input',
            };

            component = setUp(props);
        });

        it('Should render a home input', () =>{                
            let input = findByTestAtrr(component, 'input');
            expect(input.length).toBe(1);
    
        });  

        it('Should render placeholder is Nome', () =>{                
            let findComponent = component.find(`[placeholder='Nome']`);
            expect(findComponent.length).toBe(1);
    
        }); 

        it('Should render type is input', () =>{                
            let findComponent = component.find(`[type='input']`);
            expect(findComponent.length).toBe(1);
    
        });      
        
      
    });

    describe('Have NO props', () =>{
        let component;
        beforeEach(() =>{
            component = setUp();
        });

        it('Should render placeholder is not Nome', () =>{                
            let findComponent = component.find(`[placeholder='Nome']`);
            expect(findComponent.length).toBe(0);
    
        }); 

        it('Should render type is not input', () =>{                
            let findComponent = component.find(`[type='input']`);
            expect(findComponent.length).toBe(0);
    
        });  
    });
       
});