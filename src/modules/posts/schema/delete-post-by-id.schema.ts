import { t } from "elysia";

export const deletePostByIdSchema = {
	params: t.Object({
		id: t.Numeric()
	})
} as const
