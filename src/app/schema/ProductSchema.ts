import { model, Schema, PaginateModel } from 'mongoose';
import { IProduct } from '../interfaces/IProduct';
import paginate from 'mongoose-paginate-v2';

const schema = new Schema<IProduct>({
  name: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  },
  employee_id: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

schema.plugin(paginate)

const Employee = model<IProduct, PaginateModel<IProduct>>('Product', schema)

export default Employee;
