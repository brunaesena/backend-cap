import prismaClient from "../prisma";

interface CriarDenunciaProps{
    titulo: string
    descricao:string
}

class CriarDenunciaService{
    async execute({titulo, descricao}: CriarDenunciaProps){

        if (!titulo || !descricao) {
            throw new Error("Preencha todos os campos")
        } 
        
        const denuncias = await prismaClient.denuncias.create({
            data: {
                titulo,
                descricao
            }
        })

        return denuncias;
    }
}

export {CriarDenunciaService}