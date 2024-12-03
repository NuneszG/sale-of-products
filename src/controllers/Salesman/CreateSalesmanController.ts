import { FastifyRequest, FastifyReply } from "fastify";
import { Salesman } from "../../utils/SalesmanInterfaces";
import { CreateProductService } from "../../services/Salesman/CreateSalesmanService";

export class CreateSalesmanController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, last_name, email, phone, sex } = request.body as Salesman;

        const newSalesman = new CreateProductService();
        const Salesman = await newSalesman.Execute({ name, last_name, email, phone, sex });

        reply.send(Salesman);
    };
};