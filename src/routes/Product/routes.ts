import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";

import { CreateProductController } from "../../controllers/Product/CreateProductController";

export default async function RoutesProduct(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/products/create-sale/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().Handle(request, reply)
    }); 

     
};