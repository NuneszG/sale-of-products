import { Prisma } from "../../prisma/prisma";
import { SalesmanId } from "../../utils/SalesmanInterfaces";

export class GetbyIdService {
    async Execute({ id }: SalesmanId) {

        const IdSalesman = await Prisma.salesman.findFirst({
            where: {
                id: id
            }
        });

        const Salesman = await Prisma.salesman.findFirst({
            where: {
                id: IdSalesman?.id
            }
        });

        return Salesman;
    };
};