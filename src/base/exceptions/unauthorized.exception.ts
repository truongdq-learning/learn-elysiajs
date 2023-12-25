import { StatusCodes } from "http-status-codes";

export class UnauthorizedException extends Error {
    status = StatusCodes.UNAUTHORIZED
    constructor(public message: string) {
        super(message)
    }
}
