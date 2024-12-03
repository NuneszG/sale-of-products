import { Prisma } from "../../prisma/prisma";
import { Salesman } from "../../utils/SalesmanInterfaces";

export class CreateProductService {
    async Execute({ name, last_name, email, phone, sex }: Salesman) {

        if (!name || !last_name || !email || !phone || !sex) {
            throw Error("Requisição inválido. Por favor, tente novamente.");
        };

        const Salesman = await Prisma.salesman.create({
            data: {
                name,
                last_name,
                email,
                phone,
                sex
            }
        });

        console.log(`${Salesman.name} foi criado com sucesso!`);
        return Salesman;
    };
};