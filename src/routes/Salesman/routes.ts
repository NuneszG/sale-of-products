import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";

import { CreateSalesmanController } from "../../controllers/Salesman/CreateSalesmanController";

export default async function Routes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/salesman/create-salesman/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateSalesmanController().Handle(request, reply);
    });

};