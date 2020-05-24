import { createParamDecorator } from "@nestjs/common";

export const UserDecorator = createParamDecorator((data: unknown, req) => req.user);