import { StatusCodes } from "http-status-codes";

export class BadRequestException extends Error {
    status = StatusCodes.BAD_REQUEST
    constructor(public message: string) {
        super(message)
        this.name = "BadRequestException"
        this.status = StatusCodes.BAD_REQUEST
    }
}
