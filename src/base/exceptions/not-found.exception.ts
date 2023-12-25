import { StatusCodes } from "http-status-codes";

export class NotFoundException extends Error {
    status = StatusCodes.NOT_FOUND
    constructor(public message: string) {
        super(message)
    }
}
