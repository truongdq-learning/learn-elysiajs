import { t } from "elysia";

export const updateUserSchema = {
	body: t.Object({
		password: t.Optional(t.String({minLength: 10})),
		displayName: t.Optional(t.String()),
	}),
	params: t.Object({
		id: t.Numeric()
	})
} as const
