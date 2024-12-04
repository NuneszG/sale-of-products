import { FastifyRequest, FastifyReply } from "fastify";
import { ProductId } from "../../utils/ProductInterfaces";
import { DeleteProductService } from "../../services/Products/DeleteProductService";

export class DeleteProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as ProductId;
        const ProductDeleted = new DeleteProductService();
        const Product = await ProductDeleted.Execute({ id });

        reply.send(Product);
    };
};