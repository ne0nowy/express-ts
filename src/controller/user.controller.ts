import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createUser } from '../service/user.service';
import log from '../logger';

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.status(201).send(omit(user.toJSON(), "password"));
    } catch (err) {
        log.error(err);
        return res.status(409).send(err.message);
    }
}

export async function createUserSessionHandler(req: Request, res: Response) {
    try {

    } catch (err) {
        log.error(err);
        return res.status(409).send(err.message);
    }
}