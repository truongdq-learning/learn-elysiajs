import { t } from "elysia";

export const deleteUserByIdSchema = {
	params: t.Object({
		id: t.Numeric()
	})
} as const
