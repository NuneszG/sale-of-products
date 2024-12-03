import { FastifyRequest, FastifyReply } from "fastify";
import { ShowAllSalesmanService } from "../../services/Salesman/ShowAllSalesmanService";

export class ShowAllSalesmanController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const AllSalesman = new ShowAllSalesmanService();
        const Salesmans = await AllSalesman.Execute();

        reply.send(Salesmans);
    };
};