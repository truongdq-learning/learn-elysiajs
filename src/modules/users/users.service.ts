import { Repository } from "~/base/repository";
import { BadRequestException } from "~/base/exceptions/bad-request.exception";
import { UserEntity } from "~/modules/users/users.entity";
import { UsersRepository } from "~/modules/users/users.repository";

export class UsersService {
	private repository: Repository<UserEntity>;

	constructor(repository: Repository<UserEntity>) {
		this.repository = repository
	}

	 async getUsers() {
		return this.repository.findAll()
	 }

	 async createUser(data: UserEntity) {
		const user = await this.repository.findOne({username: data.username})
		 if(user){
			 throw new BadRequestException("error.usernameDuplicate")
		 }
		return this.repository.create(data)
	 }

	 async getUserById(id: number) {
		return this.repository.findById(id)
	 }

	 async deleteUser(id: number) {
		return this.repository.delete(id)
	 }

	 async updateUser(id: number, data: Partial<UserEntity>) {
		 return this.repository.update(id, data)
	 }
}

export const usersService = new UsersService(new UsersRepository())
