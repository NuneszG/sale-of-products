import { Prisma } from "../../prisma/prisma";
import { ProductCategory } from "../../utils/ProductInterfaces";

export class GetSalebyCategoryService {
    async Execute({ category }: ProductCategory) {

        const Sale = await Prisma.product.findFirst({
            where: {
                category: category
            }
        });

        const SaleCategory = await Prisma.product.findFirst({
            where: {
                category: Sale?.category
            }
        });

        return SaleCategory;
    };
};