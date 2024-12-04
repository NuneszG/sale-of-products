import { Prisma } from "../../prisma/prisma";

export class ShowAllSalesService {
    async Execute() {

        const AllSales = await Prisma.product.findMany();

        return AllSales;
    };
};