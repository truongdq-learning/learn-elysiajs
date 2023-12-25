import { Repository } from "~/base/repository";
import { PostEntity } from "~/modules/posts/posts.entity";
import { Database } from "bun:sqlite";
import { formatDate } from "~/base/utils";

export class PostsRepository implements Repository<PostEntity> {
	private db: Database
	constructor() {
		this.db = new Database('db.posts')
		this.init()
				.then(() => console.log('Database [db.posts] initialized'))
				.catch(console.error);
	}

	async init() {
		return this.db.run('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, userId INTEGER, createdAt TEXT, updatedAt TEXT)');
	}

	async create(data: PostEntity): Promise<number> {
		const postCreated = this.db.query(`INSERT INTO posts (title, content, userId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?) RETURNING id`).get(
			data.title,
			data.content,
			data.userId,
			formatDate(data.createdAt),
			formatDate(data.updatedAt)
		)
		return Promise.resolve(postCreated as number);
	}

	async	delete(id: number): Promise<number> {
		this.db.run(`DELETE FROM posts WHERE id = ${id}`)
		return Promise.resolve(id);
	}

	async findAll(filter: Partial<PostEntity> | undefined): Promise<PostEntity[]> {
		return this.db.query('SELECT * FROM posts').all() as PostEntity[]
	}

	async findOne(filter: Partial<PostEntity>): Promise<PostEntity> {
		const keys = Object.keys(filter)
		const firstKey = keys[0]
		const value = filter[firstKey as keyof typeof filter] as string
		return this.db.query(`SELECT * FROM posts WHERE ${firstKey} = $1`).get(value) as PostEntity
	}

	async findById(id: number): Promise<PostEntity> {
		return this.db.query('SELECT * FROM posts WHERE id = $1').get(id) as PostEntity
	}

	async update(id: number, data: Partial<PostEntity>): Promise<number> {
		this.db.run(`UPDATE posts SET title = '${data.title}', content = '${data.content}', updatedAt = '${data.updatedAt}' WHERE id = ${id}`)
		return Promise.resolve(id);
	}
}
