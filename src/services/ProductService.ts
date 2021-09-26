/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { getCustomRepository } from 'typeorm';
import ProductRepository from '../repositories/ProductRepository';

interface Request {
  code: number;
  description: string;
  buyPrice: number;
  sellPrice: number;
  tags: string[];
  lovers?: number;
}

export default class ProductService {
  async create({ code, description, buyPrice, sellPrice, tags }: Request) {
    const productRepository = getCustomRepository(ProductRepository);
    let lovers = 0;

    const productAlreadyExists = await productRepository.findOne({
      code,
    });

    if (productAlreadyExists) {
      lovers = productAlreadyExists.lovers;
    }

    const product = productRepository.create({
      code,
      description,
      buyPrice,
      sellPrice,
      tags,
      lovers,
    });

    await productRepository.save(product);
    return product;
  }

  async list() {
    const productRepository = getCustomRepository(ProductRepository);

    const all = await productRepository.find();

    return all;
  }

  async getById(id: string) {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new Error('Produto não encontrado!');
    }

    return product;
  }

  async delete(id: string) {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new Error('Produto não encontrado!');
    }

    const deleted = await productRepository.delete(id);

    return deleted;
  }

  async Update(
    id: string,
    { code, description, buyPrice, sellPrice, tags, lovers }: Request,
  ) {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new Error('Produto não encontrado!');
    }

    await productRepository.update(id, {
      code,
      description,
      buyPrice,
      sellPrice,
      lovers,
      tags,
    });

    const productUpdate = await productRepository.findOne(id);

    return productUpdate;
  }

  //   async increaseLovers(id: string) {
  //     const productRepository = getCustomRepository(ProductRepository);

  //     const product = await productRepository.findOne(id);

  //     if (!product) {
  //       throw new Error('Produto não encontrado!');
  //     }

  //     await productRepository.update(id, {
  //       lovers: product.lovers + 1,
  //     });

  //     const productUpdate = await productRepository.findOne(id);

  //     return productUpdate;
  //   }
}
