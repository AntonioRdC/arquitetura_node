import { Request, Response } from 'express'

import Product from '../schema/ProductSchema'
import Employee from '../schema/EmployeeSchema'

class ProductController {
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const employee = await Employee.find({
        _id: req.body.employee_id,
        office: 'gerente',
        situation: 'activate'
      })

      if (employee.length === 0) {
        return res.status(400).json({ message: 'Employee invalid' })
      }

      const product = await Product.create(req.body)

      return res.status(201).json(product)
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const product = await Product.paginate({
        name: { $regex: req.query.name || '' },
        category: { $regex: req.query.category || '' },
        price: { $regex: req.query.price || '' }
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

      return res.status(200).json(product)
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { returnDocument: 'after' }
      )

      return res.status(200).json(product)
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      await Product.findByIdAndDelete(req.params.id)

      return res.status(204).json({})
    } catch (err: any) {
      return res.status(400).json({ message: err.message })
    }
  }
}

export default new ProductController()
