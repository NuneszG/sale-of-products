import { Prisma } from "../../prisma/prisma";
import { Product } from "../../utils/ProductInterfaces";

export class CreateProductService {
    async Execute({ name, price, description, paymentMethod, category, owner}: Product) {

        if(!name || !price || !description || !paymentMethod || !category || !owner) {
            throw new Error("Requisição inválida. Por favor, tente novamente.");
        };

        const NewProduct = await Prisma.product.create({
            data: {
                name,
                price,
                description,
                paymentMethod,
                category,
                owner: {
                    connect: { id: "674f50ffdcf3098607c3fd51" },
                },
            },
           
        });

        console.log(`A new product just been created, ${NewProduct.name}`);
        return NewProduct;
    };
};