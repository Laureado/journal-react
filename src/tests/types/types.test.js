import { types } from "../../types/types.js";

describe('Pruebas en el archivo types.js', () => {
    
    const typesMock = {

        login: '[Auth] Login',
        logout: '[Auth] Logout',
    
        uiSetError: '[UI] set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
    
        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdated: '[Notes] Update note saved',
        notesFileUrl: '[Notes] Updated image url',
        notesDelete: '[Notes] Deleted note',
        notesLogoutCleaning: '[Notes] Logout cleaning',
    
    }

    test('Debe de tener estos types', () => {
        
        expect(types).toEqual(typesMock);

    })
    

});
