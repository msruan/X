export abstract class SocialError extends Error {

    constructor(message: string = "Erro na aplicação!") {
        
        super(message);
        this.name = "SocialError";
    }
}