import express from "express";
import helmet from "helmet";
import routes from "./routes";
import {connectToDatabase} from "./services/database.service";

const app = express();

connectToDatabase().then(() => {
    app.use(express.json());
    app.use(helmet());

    routes(app);

    app.listen(3000);
})

