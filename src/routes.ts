import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import { validateRequest, requiresUser } from './middleware';
import { createUserSchema, createUserSessionSchema } from "./schema/user.schema";

export default function (app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send({ 'message': "Works fine!" });
    })

    // User Register
    // POST /api/users
    app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

    // Login
    // POST /api/sessions
    app.post('/api/sessions', validateRequest(createUserSessionSchema), createUserSessionHandler);

    // Get the user`s sessions
    // GET /api/sessions
    app.get('/api/sessions', requiresUser, getUserSessionsHandler);

    // Logout
    // DELETE /api/sessions
    app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);
}