import { FastifyRequest, FastifyReply } from "fastify";
import { Product } from "../../utils/ProductInterfaces";
import { CreateProductService } from "../../services/Products/CreateProductService";

export class CreateProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
    
        const { id } = request.query as Product
        const { name, price, description, paymentMethod, category, owner } = request.body as Product;

        const NewProduct = new CreateProductService();
        const Product = await NewProduct.Execute({ name, price, description, paymentMethod, category, owner, id });

        reply.send(Product);
    };
};