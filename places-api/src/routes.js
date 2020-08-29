import { Router } from 'express';

import StorePlacesController from './app/controllers/StorePlacesController';
import PlacesController from './app/controllers/PlacesController';

const routes = new Router();

routes.get('/storeplaces', StorePlacesController.store);

routes.post('/places', PlacesController.store);
routes.put('/places/:id', PlacesController.update);
routes.delete('/places/:id', PlacesController.delete);
routes.get('/places/:id', PlacesController.show);
routes.get('/places', PlacesController.index);


export default routes;
