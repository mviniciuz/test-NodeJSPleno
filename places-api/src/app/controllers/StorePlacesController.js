import Places from '../schemas/Places';

import fs from 'fs';

class StorePlacesControlller {
    async store(req, res) {  
   
    fs.readFile('./base.json', 'utf-8', async (err, data)=>{

        let arrayPlaces = [];
    
        if (!err){           
          arrayPlaces = JSON.parse(data);
        } else {
          return res.json({erro: 'Erro ao ler arquivo base.json'});
        }  

        const promises = arrayPlaces.map(async (item) => { 
           
        const place = await Places.findOne({ name: item.name});
         if (place) {
            return await place.updateOne({name: item.name, lat: item.latitude, lng: item.longitude })

         } else {
            return await Places.create({name: item.name, lat: item.latitude, lng: item.longitude }) 
         }
       });
    
        await Promise.all(promises);
        return res.json({status:'Coordenadas importadas com sucesso!'});

    });
  }

}

 
export default new StorePlacesControlller();
