import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el reducer todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const  state = todoReducer(demoTodos, {});
        expect( state ).toEqual(demoTodos);
    });

    test('Debe de agregar un TODO', () => {

        const newTodo = [{
            id: 3,
            description: 'Aprender Express',
            done: false
        }];

        const action = {
            type: 'add',
            payload:newTodo
        }

        const  state = todoReducer(demoTodos, action);
        expect( state.length ).toBe(3);
        expect( state ).toEqual( [...demoTodos, newTodo]);
        
    });
    
});

