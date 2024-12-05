import { FastifyRequest, FastifyReply } from "fastify";
import { ProductUpdate, ProductId} from "../../utils/ProductInterfaces";
import { UpdateProductService } from "../../services/Products/UpdateProductService";

export class UpdateProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as ProductId;
        const { name, category, description, paymentMethod, price } = request.body as ProductUpdate;

        const UpdateProduct = new UpdateProductService();
        const Product = await UpdateProduct.Execute({ id, name, category, description, paymentMethod, price });

        reply.send(Product);
    };
};