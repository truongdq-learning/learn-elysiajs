import { t } from "elysia";

export const getUserByIdSchema = {
	params: t.Object({
		id: t.Numeric()
	})
} as const
