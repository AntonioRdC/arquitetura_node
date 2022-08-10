import { Router } from 'express';
import ProductController from '../app/controller/ProductController';
import createValidation from '../app/validations/product/create';
import updateValidation from '../app/validations/product/update';

const routes = Router();

routes.post('/product', createValidation, ProductController.create);
routes.get('/product', ProductController.index);
routes.put('/product/:id', updateValidation, ProductController.update);
routes.delete('/product/:id', ProductController.delete);

export default routes;
