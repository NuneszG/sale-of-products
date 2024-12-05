import { FastifyRequest, FastifyReply } from "fastify";
import { ProductId } from "../../utils/ProductInterfaces";
import { GetSalebyIdService } from "../../services/Products/GetSalebyIdService";

export class GetSalebyIdController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as ProductId;
        
        const GetSales = new GetSalebyIdService();
        const Sales = await GetSales.Execute({ id });

        reply.send(Sales);
    };
};