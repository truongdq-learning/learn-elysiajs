import { StatusCodes } from "http-status-codes";

export class ForbiddenException extends Error {
    status = StatusCodes.FORBIDDEN
    constructor(public message: string) {
        super(message)
    }
}
