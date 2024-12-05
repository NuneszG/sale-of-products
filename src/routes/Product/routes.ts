import { FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyInstance } from "fastify";

import { CreateProductController } from "../../controllers/Product/CreateProductController";
import { DeleteProductController } from "../../controllers/Product/DeleteProductController";
import { ShowAllSalesController } from "../../controllers/Product/ShowAllSalesController";
import { GetSalebyCategoryController } from "../../controllers/Product/GetSalebyCategoryController";
import { UpdateProductController } from "../../controllers/Product/UpdateProductController";
import { GetSalebyIdController } from "../../controllers/Product/GetSalebyIdController";

export default async function RoutesProduct(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/products/create-sale/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().Handle(request, reply)
    }); 

    fastify.get("/auth/products/get-all-sales/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ShowAllSalesController().Handle(request, reply)
    }); 

    fastify.delete("/auth/products/delete-sale/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().Handle(request, reply)
    }); 

    fastify.get("/auth/products/get-sale-category/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetSalebyCategoryController().Handle(request, reply)
    }); 

    fastify.put("/auth/products/update-sale/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProductController().Handle(request, reply)
    }); 

    fastify.get("/auth/products/get-sale-id/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetSalebyIdController().Handle(request, reply)
    }); 
     
};