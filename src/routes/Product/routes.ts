import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";

import { CreateProductController } from "../../controllers/Product/CreateProductController";
import { DeleteProductController } from "../../controllers/Product/DeleteProductController";

export default async function RoutesProduct(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/products/create-sale/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().Handle(request, reply)
    }); 

    fastify.delete("/auth/products/delete-sale/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().Handle(request, reply)
    }); 
     
};