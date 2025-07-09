import {Express, Request, Response} from "express";
import {createProjectHandler} from "./controller/projects.controller";
import {createUserHandler} from "./controller/users.controller";

function routes(app: Express) {
    app.route("/projects")
        .post(createProjectHandler);
    app.route("/users")
        .post(createUserHandler);

}
export default routes;