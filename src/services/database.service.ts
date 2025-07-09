import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export async function connectToDatabase () {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb://localhost:27017");

    await client.connect();

    const db: mongoDB.Db = client.db("simpleApi");

    collections.projects = db.collection("projects");
    collections.users = db.collection("users");
}

export const collections: { projects?: mongoDB.Collection, users?: mongoDB.Collection } = {}