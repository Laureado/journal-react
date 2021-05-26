import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'durzgxdco', 
    api_key: '548295911784778', 
    api_secret: 'Wbw1nJhEuMjVnKLV7ib-bjFwxYc' 
});


describe('Pruebas en fileUpload.js', () => {

    // test('Debe de cargar un archivo y retornar el URL', async() => {
        
    //     const resp = await fetch('https://static.wikia.nocookie.net/roblox/images/0/05/Doge.png/revision/latest?cb=20150704111053');
    //     const blob = await resp.blob();

    //     const file = new File([blob], 'foto.png');
    //     const url = await fileUpload(file);

    //     expect(typeof url ).toBe('string');

    //     //Borrar imagen por ID
    //     const segments = url.split('/');
    //     const imageId = segments[segments.length - 1].replace('.jpg','');

    //     cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
    //         done();
    //     });

    // })

    test('Debe de retornar un error', async() => {
        
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect( url ).toBe(null);

    })
    

})
