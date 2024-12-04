import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";

import { CreateSalesmanController } from "../../controllers/Salesman/CreateSalesmanController";
import { GetSalesmanSalesController } from "../../controllers/Salesman/GetSalesmanSalesController";
import { ShowAllSalesmanController } from "../../controllers/Salesman/ShowAllSalesmanController";
import { GetbyIdController } from "../../controllers/Salesman/GetbyIdController";

export default async function Routes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/salesman/create-salesman/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateSalesmanController().Handle(request, reply);
    });

    fastify.get("/auth/salesman/sales/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetSalesmanSalesController().Handle(request, reply)
    });

    fastify.get("/auth/salesman/get-all-salesman/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ShowAllSalesmanController().Handle(request, reply)
    });

    fastify.get("/auth/salesman/specific-salesman/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetbyIdController().Handle(request, reply)
    });
};