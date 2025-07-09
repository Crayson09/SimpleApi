import {Response, Request} from "express";
import {collections} from "../services/database.service";
import User from "../models/users.modals";
import {genSaltSync, hashSync} from "bcrypt-ts";

export async function createUserHandler(req: Request, res: Response) {
    try {
        const body = req.body;

        if(!body.name || !body.email || !body.password) {
            return res.status(400).send("Missing body");
        }

        const hashedPassword = hashSync(body.password,genSaltSync(10));

        const newUser: User = {
            name: body.name,
            email: body.email,
            password: hashedPassword,
            createdAt: Date.now()
        }

        const result = await collections.users?.insertOne(newUser);
        result
            ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new user.");
    } catch (error) {
        console.error(error);
        // @ts-ignore
        res.status(400).send(error.message);
    }
}