import { Prisma } from "../../prisma/prisma";
import { SalesmanId } from "../../utils/SalesmanInterfaces";

export class DeleteSalesmanService {
    async Execute({ id }: SalesmanId) {

        const Salesman = await Prisma.salesman.findFirst({
            where: {
                id: id
            },
            include: {
                products: true
            }
        });

        await Prisma.salesman.delete({
            where: {
                id: Salesman?.id
            }
        });

        return `Os dados do vendedor ${Salesman?.name} e suas vendas feitas, foram deletados.`;
    };
};