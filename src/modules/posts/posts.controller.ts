import { Elysia } from "elysia";
import { createPostSchema } from "~/modules/posts/schema/create-post.schema";
import { postsService } from "~/modules/posts/posts.service";
import { PostEntity } from "~/modules/posts/posts.entity";
import { getPostByIdSchema } from "~/modules/posts/schema/get-post-by-id.schema";
import { deletePostByIdSchema } from "~/modules/posts/schema/delete-post-by-id.schema";
import { updatePostSchema } from "~/modules/posts/schema/update-post.schema";

const swaggerTag = {
	detail: {
		tags: ['Posts']
	}
}

export const postsController = (app: Elysia) => {
			app.group('/posts', appChain =>
			appChain
			.get('/', ( ) => postsService.getPosts(), swaggerTag)
			.get('/:id', ({params}) => postsService.getPostById(+params.id), {...getPostByIdSchema, ...swaggerTag})
			.post('/', ({body}) => postsService.createPost(body as PostEntity), {...createPostSchema, ...swaggerTag})
			.delete('/:id', ({params}) => postsService.deletePost(+params.id), {...deletePostByIdSchema, ...swaggerTag})
			.put('/:id', ({params, body}) => postsService.updatePost(+params.id, body as PostEntity), {...updatePostSchema, ...swaggerTag})
			)
	return app
}
