/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';

import ProductService from '../services/ProductService';

const productService = new ProductService();

export default class ProductController {
  async create(req: Request, res: Response) {
    try {
      const product = await productService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async list(req: Request, res: Response) {
    try {
      const listAll = await productService.list();
      return res.status(200).json(listAll);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const product = await productService.getById(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await productService.delete(req.params.id);
      return res.status(200).json('Produto excluido com sucesso!');
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const productUpdate = await productService.Update(
        req.params.id,
        req.body,
      );
      return res.status(200).json(productUpdate);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async increaseLovers(req: Request, res: Response) {
    try {
      const productUpdate = await productService.Update(
        req.params.id,
        req.body,
      );
      return res.status(200).json(productUpdate);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
