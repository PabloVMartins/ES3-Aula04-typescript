import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    nullable: true,
  })
  code: number;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  buyPrice: number;

  @Column({
    nullable: true,
  })
  sellPrice: number;

  @Column('varchar', { array: true, nullable: true })
  tags: string[];

  @Column({
    default: 0,
  })
  lovers: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
