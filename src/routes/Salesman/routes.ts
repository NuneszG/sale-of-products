import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";

import { CreateSalesmanController } from "../../controllers/Salesman/CreateSalesmanController";
import { GetSalesmanSalesController } from "../../controllers/Salesman/GetSalesmanSalesController";
import { ShowAllSalesmanController } from "../../controllers/Salesman/ShowAllSalesmanController";
import { GetbyIdController } from "../../controllers/Salesman/GetbyIdController";
import { DeleteSalesmanController } from "../../controllers/Salesman/DeleteSalesmanController";
import { UpdateSalesmanController } from "../../controllers/Salesman/UpdateSalesmanController";

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

    fastify.delete("/auth/salesman/delete-salesman/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteSalesmanController().Handle(request, reply)
    });

    fastify.put("/auth/salesman/update-salesman/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateSalesmanController().Handle(request, reply)
    });
};