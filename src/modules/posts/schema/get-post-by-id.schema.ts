import { t } from "elysia";

export const getPostByIdSchema = {
	params: t.Object({
		id: t.Numeric()
	})
} as const
