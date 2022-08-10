import { Types } from 'mongoose';

export interface IEmployee {
  name: string;
  cpf: string;
  office: string;
  birthday: string;
  situation: string;
}

export interface IEmployeeResponse {
  name: string;
  cpf: string;
  office: string;
  birthday: string;
  situation: string;
  _id: Types.ObjectId;
  __v?: number;
}