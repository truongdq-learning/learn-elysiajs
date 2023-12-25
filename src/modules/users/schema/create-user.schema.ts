import { t } from "elysia";

export const createUserSchema = {
	body: t.Object({
		username: t.String(),
		password: t.String({minLength: 8}),
		displayName: t.String()
	})
} as const
