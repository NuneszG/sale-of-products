import { FastifyRequest, FastifyReply } from "fastify";
import { SalesmanId } from "../../utils/SalesmanInterfaces";
import { GetbyIdService } from "../../services/Salesman/GetbyIdService";

export class GetbyIdController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as SalesmanId;

        const GetSalesman = new GetbyIdService();
        const Salesman = await GetSalesman.Execute({ id });

        reply.send(Salesman);
    };
};