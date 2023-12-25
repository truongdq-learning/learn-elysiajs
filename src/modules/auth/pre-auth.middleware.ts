import { Elysia } from "elysia";
import { bearer } from "@elysiajs/bearer";

export const preAuthMiddleware = (app: Elysia) => app.use(bearer()).onBeforeHandle(({
	bearer, set
}) => {
	if (!bearer) {
		set.status = 400
		set.headers[
			'WWW-Authenticate'
			] = `Bearer realm='sign', error="invalid_request"`

		return 'Unauthorized'
	}
})
