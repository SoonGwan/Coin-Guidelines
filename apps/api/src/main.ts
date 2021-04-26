import * as express from "express";
import * as cors from "cors";
import { Message } from "@coin-line/api-interfaces";
import * as database from "./database";
import api from "./api";
const app = express();

const greeting: Message = { message: "Welcome to api!" };
database.getConnection();

app.use(cors());

app.get("/api", (req, res) => {
	res.send(greeting);
});

app.use("/api", api);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
	console.log("Listening at http://localhost:" + port + "/api");
});
server.on("error", console.error);
