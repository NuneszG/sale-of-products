import { fastify } from "fastify";
import Routes from "./routes/Salesman/routes";
import RoutesProduct from "./routes/Product/routes";
import cors from "@fastify/cors";

const App = fastify({ logger: true });

const Start = async () => {

    await App.register(cors);
    await App.register(Routes);
    await App.register(RoutesProduct);

    try {
        await App.listen({ port: 8000 });
    } catch (err) {
        process.exit(1);
    };
};

Start();