import { Prisma } from "../../prisma/prisma";

export class ShowAllSalesmanService {
    async Execute() {

        const All = await Prisma.salesman.findMany();

        return All;
    };
};