import { Request, Response } from 'express'

import Employee from '../schema/EmployeeSchema'
import cpfConvert from '../utils/CpfConvert'

class EmployeeController {
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const employee = await Employee.create({
        name: req.body.name,
        cpf: req.body.cpf,
        office: req.body.office,
        birthday: req.body.birthday,
        situation: req.body.situation
      })

      employee.cpf = cpfConvert(employee.cpf)

      return res.status(201).json(employee)
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const employee = await Employee.paginate({
        name: { $regex: req.query.name || '' },
        cpf: { $regex: req.query.cpf || '' },
        office: { $regex: req.query.office || '' },
        birthday: { $regex: req.query.birthday || '' },
        situation: { $regex: req.query.situation || '' }
      }, {
        customLabels: {
          page: 'currentPage',
          totalPages: 'totalPages',
          limit: 'pageSize',
          totalDocs: 'totalCount',
          offset: false,
          pagingCounter: false,
          hasPrevPage: false,
          hasNextPage: false,
          prevPage: false,
          nextPage: false
        }
      })

      return res.status(200).json(employee)
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {

    try {
      const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { returnDocument: 'after', runValidators: true }
      )
      
      if (!employee) {
        return res.status(400).json({})
      }

      employee.cpf = cpfConvert(employee.cpf)

      return res.status(200).json(employee)
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      await Employee.findByIdAndDelete(req.params.id)

      return res.status(204).json({})
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }
}

export default new EmployeeController()
