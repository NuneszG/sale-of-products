import { FastifyRequest, FastifyReply } from "fastify";
import { SalesmanId } from "../../utils/SalesmanInterfaces"
import { DeleteSalesmanService } from "../../services/Salesman/DeleteSalesmanService";

export class DeleteSalesmanController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as SalesmanId;

        const SalesmanData = new DeleteSalesmanService();
        const Salesman = await SalesmanData.Execute({ id });

        reply.send(Salesman);
    };
};