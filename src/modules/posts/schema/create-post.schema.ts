import { t } from "elysia";

export const createPostSchema = {
	body: t.Object({
		title: t.String({minLength: 10}),
		content: t.String({minLength: 10}),
		userId: t.Numeric()
	})
} as const
