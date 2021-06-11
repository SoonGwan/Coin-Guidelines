import { Connection, createConnection, ConnectionOptions } from "typeorm";
import { logger } from "@coin-line/api-util";
import entities from "./entitiy";

export const getConnection = async (): Promise<Connection> => {
  const connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "Coin",
    synchronize: false,
    logging: false,
    entities: entities,
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  };

  try {
    const connection = createConnection(connectionOptions);
    logger.green("[SERVER / DB] connected");
    return connection;
  } catch (err) {
    logger.red("[SERVER / DB] Connection Error", err.message);
  }
};
