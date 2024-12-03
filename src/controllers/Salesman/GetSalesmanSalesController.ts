import { FastifyRequest, FastifyReply } from "fastify";
import { SalesmanId } from "../../utils/SalesmanInterfaces";
import { GetSalesmanSalesServices } from "../../services/Salesman/GetSalesmanSalesServices";

export class GetSalesmanSalesController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as SalesmanId;
        const Salesman = new GetSalesmanSalesServices();

        const SalesmanSales = await Salesman.Execute({ id });

        reply.send(SalesmanSales);
    };
};