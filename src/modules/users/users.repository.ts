import { Repository } from "~/base/repository";
import { Database } from "bun:sqlite";
import { UserEntity } from "~/modules/users/users.entity";
import { formatDate } from "~/base/utils";

export class UsersRepository implements Repository<UserEntity> {
	private db: Database
	constructor() {
		this.db = new Database('db.users')
		this.init()
				.then(() => console.log('Database [db.users] initialized'))
				.catch(console.error);
	}

	async init() {
		return this.db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, displayName TEXT, createdAt TEXT, updatedAt TEXT)');
	}

	async create(data: UserEntity): Promise<number> {
		const userCreated = this.db.query(`INSERT INTO users (username, password, displayName, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?) RETURNING id`).get(
				data.username,
				data.password,
				data.displayName,
				formatDate(data.createdAt),
				formatDate(data.updatedAt)
			)
		return Promise.resolve(userCreated as number);
	}

	async delete(id: number): Promise<number> {
		this.db.run(`DELETE FROM users WHERE id = ${id}`)
		return Promise.resolve(id);
	}


	async findAll(filter: Partial<UserEntity> | undefined): Promise<UserEntity[]> {
		return this.db.query('SELECT * FROM users').all() as UserEntity[]
	}

	async findById(id: number): Promise<UserEntity> {
		return this.db.query('SELECT * FROM users WHERE id = $1').get(id) as UserEntity

	}

	async findOne(filter: Partial<UserEntity>): Promise<UserEntity> {
		const keys = Object.keys(filter)
		const firstKey = keys[0]
		const value = filter[firstKey as keyof typeof filter] as string
		return this.db.query(`SELECT * FROM users WHERE ${firstKey} = $1`).get(value) as UserEntity
	}

	async update(id: number, data: Partial<UserEntity>): Promise<number> {
		this.db.run(`UPDATE users SET username = '${data.username}', password = '${data.password}', displayName = '${data.displayName}', updatedAt = '${data.updatedAt}' WHERE id = ${id}`)
		return Promise.resolve(id);
	}

}
