import { t } from "elysia";

export const updatePostSchema = {
	body: t.Object({
		title: t.Optional(t.String({minLength: 10})),
		content: t.Optional(t.String({minLength: 10})),
	}),
	params: t.Object({
		id: t.Numeric()
	})
} as const
