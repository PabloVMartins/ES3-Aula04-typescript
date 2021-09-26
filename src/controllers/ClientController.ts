/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';

import ClientService from '../services/ClientService';

const clientService = new ClientService();

export default class ClientController {
  async create(req: Request, res: Response) {
    try {
      const client = await clientService.create(req.body);
      return res.status(201).json(client);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async list(req: Request, res: Response) {
    try {
      const listAll = await clientService.list();
      return res.status(200).json(listAll);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const client = await clientService.getById(req.params.id);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await clientService.delete(req.params.id);
      return res.status(200).json('Cliente excluido com sucesso!');
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const clientUpdate = await clientService.Update(req.params.id, req.body);
      return res.status(200).json(clientUpdate);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
