import { info } from "console";
import swaggerJSDoc, { options } from "swagger-jsdoc";

const swaggerOptions: options = {
    definition: {},
    openapi: "3.0.0",
    info: {
        title: "backend Service API",
        version: "1.0.0",
        description: "API para catlogo de productos"
    },
    servers: [
    {
        url: "http://localhost:3000/"
    }
    ]
    apis: [
        "./src/routes/productRouter.ts",
    ] 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec; 