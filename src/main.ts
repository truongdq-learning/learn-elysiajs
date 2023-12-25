import { Elysia } from "elysia";
import { postsController } from "~/modules/posts/posts.controller";
import { injectErrors } from "~/base/exceptions";
import { handlingError } from "~/base/handling-error";
import { usersController } from "~/modules/users/users.controller";
import { baseSwagger } from "~/base/swagger";

const app = new Elysia()
                        .use(baseSwagger)
                        .error(injectErrors)
                        .onError(handlingError)
                        .use(postsController)
                        .use(usersController)
                        .listen(8080);

const url = `http://${app.server?.hostname}:${app.server?.port}`
console.log(
    `🦊 Elysia is running at ${url}
🦊 Swagger is running at ${url}/swagger
    `
);

export type App = typeof app;
