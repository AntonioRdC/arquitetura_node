import { Router } from 'express';
import EmployeeController from '../app/controller/EmployeeController';
import createValidation from '../app/validations/employee/create';
import updateValidation from '../app/validations/employee/update';

const routes = Router();

routes.post('/employee', createValidation, EmployeeController.create);
routes.get('/employee', EmployeeController.index);
routes.put('/employee/:id', updateValidation, EmployeeController.update);
routes.delete('/employee/:id', EmployeeController.delete);

export default routes;
