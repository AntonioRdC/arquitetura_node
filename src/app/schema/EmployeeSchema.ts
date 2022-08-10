import { model, Schema, PaginateModel } from 'mongoose';
import { IEmployee } from '../interfaces/IEmployee';
import paginate from 'mongoose-paginate-v2';

const schema = new Schema<IEmployee>({
  name: {
    type: String
  },
  cpf: {
    type: String
  },
  office: {
    type: String
  },
  birthday: {
    type: String
  },
  situation: {
    type: String
  }
});

schema.plugin(paginate)

const Employee = model<IEmployee, PaginateModel<IEmployee>>('Employee', schema)

export default Employee;
