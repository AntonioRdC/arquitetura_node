import { Types } from 'mongoose';

export interface IProduct {
  name: string;
  category: string;
  price: number;
  employee_id: Types.ObjectId;
}

export interface IProductResponse {
  name: string;
  category: string;
  price: number;
  employee_id: Types.ObjectId;
  _id: Types.ObjectId;
  __v?: number;
}