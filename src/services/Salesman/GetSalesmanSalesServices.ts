import { Prisma } from "../../prisma/prisma";
import { SalesmanId } from "../../utils/SalesmanInterfaces";

export class GetSalesmanSalesServices {
    async Execute({ id }: SalesmanId) {

        const Salesman = await Prisma.salesman.findUnique({
            where: {
                id: id
            },
            include: {
                products: true
            }
        });
        
        return Salesman;
    };
};