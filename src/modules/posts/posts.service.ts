import { Repository } from "~/base/repository";
import { PostEntity } from "~/modules/posts/posts.entity";
import { PostsRepository } from "~/modules/posts/posts.repository";
import { BadRequestException } from "~/base/exceptions/bad-request.exception";

export class PostsService {
	private repository: Repository<PostEntity>;

	constructor(repository: Repository<PostEntity>) {
		this.repository = repository
	}

	 async getPosts() {
		return this.repository.findAll()
	 }

	 async createPost(data: PostEntity) {
		const post = await this.repository.findOne({title: data.title})
		 if(post){
			 throw new BadRequestException("error.titleDuplicate")
		 }
		return this.repository.create(data)
	 }

	 async getPostById(id: number) {
		return this.repository.findById(id)
	 }

	 async deletePost(id: number) {
		return this.repository.delete(id)
	 }

	 async updatePost(id: number, data: Partial<PostEntity>) {
		 return this.repository.update(id, data)
	 }
}

export const postsService = new PostsService(new PostsRepository())
