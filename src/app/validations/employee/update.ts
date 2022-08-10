import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      _id: Joi.string()
        .forbidden(),
      name: Joi.string(),
      cpf: Joi.string()
        .min(11)
        .max(11)
        .pattern(/^[0-9]+$/),
      office: Joi.string()
        .valid('gerente', 'vendedor', 'caixa'),
      birthday: Joi.date()
        .iso()
        .max('now'),
      situation: Joi.string()
        .valid('activate', 'deactivate')
    });

    const { error } = await schema.validate(req.body, { abortEarly: true });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
