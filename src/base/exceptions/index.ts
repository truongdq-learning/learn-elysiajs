import { BadRequestException } from "~/base/exceptions/bad-request.exception";
import { ForbiddenException } from "~/base/exceptions/forbidden.exception";
import { InternalServerErrorException } from "~/base/exceptions/internal-server-error.exception";
import { NotFoundException } from "~/base/exceptions/not-found.exception";
import { UnauthorizedException } from "~/base/exceptions/unauthorized.exception";

export const injectErrors = {
	BadRequestException,
	ForbiddenException,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} as const
