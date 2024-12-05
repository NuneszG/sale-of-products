import { Prisma } from "../../prisma/prisma";
import { ProductUpdate } from "../../utils/ProductInterfaces";

export class UpdateProductService {
    async Execute({ id, name, category, description, paymentMethod, price }: ProductUpdate) {

        const Product = await Prisma.product.findFirst({
            where: {
                id: id
            }
        });

        const ProductUpdated = await Prisma.product.update({
            where: {
                id: Product?.id
            },
            data: {
                name,
                price,
                paymentMethod,
                description,
                category
            }
        });

        return ProductUpdated;
    };
};

