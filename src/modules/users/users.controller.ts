import { Elysia } from "elysia";
import { usersService } from "~/modules/users/users.service";
import { UserEntity } from "~/modules/users/users.entity";
import { createUserSchema } from "~/modules/users/schema/create-user.schema";
import { getUserByIdSchema } from "~/modules/users/schema/get-user-by-id.schema";
import { deleteUserByIdSchema } from "~/modules/users/schema/delete-user-by-id.schema";
import { updateUserSchema } from "~/modules/users/schema/update-user.schema";

const swaggerTag = {
	detail: {
		tags: ['Users']
	}
}

export const usersController = (app: Elysia) => {
			app.group('/users', chainApp =>
				chainApp
			.get('/', ( ) => usersService.getUsers(), swaggerTag)
			.get('/:id', ({params}) => usersService.getUserById(+params.id), {...getUserByIdSchema, ...swaggerTag})
			.post('/', ({body}) => usersService.createUser(body as UserEntity), {...createUserSchema, ...swaggerTag})
			.delete('/:id', ({params}) => usersService.deleteUser(+params.id), {...deleteUserByIdSchema, ...swaggerTag})
			.put('/:id', ({params, body}) => usersService.updateUser(+params.id, body as UserEntity), {...updateUserSchema, ...swaggerTag})
	)
	return app
}
