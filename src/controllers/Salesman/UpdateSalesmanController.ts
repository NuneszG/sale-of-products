import { FastifyRequest, FastifyReply } from "fastify";
import { Salesman, SalesmanId } from "../../utils/SalesmanInterfaces";
import { UpdateSalesmanService } from "../../services/Salesman/UpdateSalesmanService";

export class UpdateSalesmanController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as SalesmanId;
        const { name, last_name, email, phone, sex } = request.body as Salesman;

        const Salesman = new UpdateSalesmanService();
        const SalesmanUpdated = await Salesman.Execute({ id, name, last_name, email, phone, sex });

        reply.send(SalesmanUpdated);
    };
};