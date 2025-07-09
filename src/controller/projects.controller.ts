import {NextFunction, Request, Response} from "express";
import Project from "../models/projects.models"
import {collections} from "../services/database.service";

export async function createProjectHandler(req: Request, res: Response) {
    try {
        const body = req.body;

        if(!body.userId || !body.name || !body.description) {
            return res.status(400).send("Missing body");
        }

        const newProject: Project = {
            userId: body.userId,
            name: body.name,
            description: body.description,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }

        const result = await collections.projects?.insertOne(newProject);
        result
            ? res.status(201).send(`Successfully created a new project with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new project.");
    } catch (error) {
        console.error(error);
        // @ts-ignore
        res.status(400).send(error.message);
    }
}



