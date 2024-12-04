import { FastifyRequest, FastifyReply } from "fastify";
import { ProductCategory } from "../../utils/ProductInterfaces";
import { GetSalebyCategoryService } from "../../services/Products/GetSalebyCategoryService"

export class GetSalebyCategoryController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { category } = request.query as ProductCategory;
        const SaleCategory = new GetSalebyCategoryService();

        const Sale = await SaleCategory.Execute({ category });

        reply.send(Sale);
    };
};