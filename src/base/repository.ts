import { Entity } from './entity';

export abstract class Repository<TEntity extends Entity> {
	abstract create(data: TEntity): Promise<number>;
	abstract findAll(filter?: Partial<TEntity>): Promise<TEntity[]>;
	abstract findById(id: number): Promise<TEntity>;
	abstract findOne(filter: Partial<TEntity>): Promise<TEntity>;
	abstract update(id: number, data: Partial<TEntity>): Promise<number>;
	abstract delete(id: number): Promise<number>;
}
