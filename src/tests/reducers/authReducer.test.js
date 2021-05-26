import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('Pruebas en authReducers.js', () => {
    
    test('Debe de retornar el uid y el nombre', () => {
        
        const demoUser = {}
        const action = {
            type: types.login,
            payload: { uid: 3092190321, displayName: 'lol' }
        }

        const state = authReducer(demoUser, action);
        expect(state).toEqual({uid: action.payload.uid, name:action.payload.displayName});

    })

    test('Debe de retornar un objeto vacio', () => {

        const demoUser = { uid: 3092190321, name: 'lol' }
        const action = {
            type: types.logout,
            payload: { uid: 3092190321, displayName: 'lol' }

        }

        const state = authReducer(demoUser, action);
        expect(state).toEqual({});
  
    })

    test('Debe de retornar el estado inicial', () => {

        const demoUser = { uid: 3092190321, name: 'lol' }
        const action = {
            payload: { uid: 3092190321, displayName: 'lol' }
        }

        const state = authReducer(demoUser, action);
        expect(state).toEqual(demoUser);
  
    })
    

})
