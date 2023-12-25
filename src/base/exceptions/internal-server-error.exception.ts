import { StatusCodes } from "http-status-codes";

export class InternalServerErrorException extends Error {
    status = StatusCodes.INTERNAL_SERVER_ERROR
    constructor(public message: string) {
        super(message)
    }
}
