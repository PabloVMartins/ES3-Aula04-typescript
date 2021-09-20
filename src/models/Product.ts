import { uuid } from 'uuidv4';

export default class Product {
  id: string;

  code: number;

  description: string;

  buyPrice: number;

  sellPrice: number;

  tags: Array<Product>;

  lovers: number;

  constructor({
    code,
    description,
    buyPrice,
    sellPrice,
    tags,
    lovers,
  }: Omit<Product, 'id'>) {
    this.id = uuid();
    this.code = code;
    this.description = description;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.tags = tags;
    this.lovers = lovers;
  }
}
