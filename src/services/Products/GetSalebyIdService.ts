import { Prisma } from "../../prisma/prisma";
import { ProductId } from "../../utils/ProductInterfaces";

export class GetSalebyIdService {
    async Execute({ id }: ProductId) {

        const Product = await Prisma.product.findFirst({
            where: {
                id: id
            }
        });

        return Product;
    };
};