import { Prisma } from "../../prisma/prisma";
import { SalesmanData} from "../../utils/SalesmanInterfaces";

export class UpdateSalesmanService {
    async Execute({ id, name, last_name, email, phone, sex }: SalesmanData) {

        const Salesman = await Prisma.salesman.findFirst({
            where: {
                id: id
            }
        });

        const UpdateSalesman = await Prisma.salesman.update({
            where: {
                id: Salesman?.id
            },
            data: {
                name,
                last_name,
                email,
                phone,
                sex
            }
        });

        return UpdateSalesman;
    };
};