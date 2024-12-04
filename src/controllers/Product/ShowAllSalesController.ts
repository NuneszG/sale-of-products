import { FastifyRequest, FastifyReply } from "fastify";
import { ShowAllSalesService } from "../../services/products/ShowAllSalesService";

export class ShowAllSalesController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const AllSales = new ShowAllSalesService();
        const All = await AllSales.Execute();

        reply.send(All);
    };
};