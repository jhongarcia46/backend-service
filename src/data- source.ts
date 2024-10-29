import "reflect-metadata"; 
import { DataSource } from "typeorm";
import { product } from "./entities/Product";

export const appdatasource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [product],
    migrations: [],
    subscribers: []
})