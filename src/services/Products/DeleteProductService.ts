import { Prisma } from "../../prisma/prisma";
import { ProductId } from "../../utils/ProductInterfaces";

export class DeleteProductService {
    async Execute({ id }: ProductId) {

        const DeleteProduct = await Prisma.product.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.product.delete({
            where: {
                id: DeleteProduct?.id
            }
        });

        return `Os dados do produto (${DeleteProduct?.name}) foi deletado.`;
    };
};