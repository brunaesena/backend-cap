import { FastifyRequest, FastifyReply } from "fastify";
import { CriarDenunciaService } from "../services/CriarDenunciaService";

class CriarDenunciaController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {titulo, descricao} = request.body as {titulo: string, descricao: string};
        console.log(titulo);
        console.log(descricao);

        const denunciaService = new CriarDenunciaService();
        const denuncia = await denunciaService.execute({titulo, descricao});

        reply.send(denuncia)
    }
}

export {CriarDenunciaController}